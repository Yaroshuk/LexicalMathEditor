/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX } from 'react'

import 'katex/dist/katex.css'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $wrapNodeInElement } from '@lexical/utils'
import {
    $createParagraphNode,
    $insertNodes,
    $isRootOrShadowRoot,
    COMMAND_PRIORITY_EDITOR,
    COMMAND_PRIORITY_LOW,
    createCommand,
    KEY_DOWN_COMMAND,
    LexicalCommand,
    PASTE_COMMAND,
    TextNode,
} from 'lexical'
import { useEffect, useRef } from 'react'
import { $createEquationNode, EquationNode } from './EquationNode'
import { findFormulaInput } from './helpers/findFormulaInput'
import { mergeRegister } from '@lexical/utils'

type CommandPayload = {
    equation: string
    inline: boolean
}

enum InputType {
    PASTE = 'paste',
    KEYBOARD = 'keyboard',
}

export const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload> =
    createCommand('INSERT_EQUATION_COMMAND')

function $findAndTransformInputFormula(node: TextNode, inputType: InputType): null | TextNode {
    const text = node.getTextContent()

    const fourmulaInput = findFormulaInput(text)

    if (!fourmulaInput) {
        return null
    }

    console.log('inputType', inputType, fourmulaInput)

    const { fullMatch, index, length } = fourmulaInput

    let targetNode

    if (index === 0) {
        ;[targetNode] = node.splitText(index + length)
    } else {
        ;[, targetNode] = node.splitText(index, index + length)
    }

    const formulaNode = $createEquationNode(`$${fullMatch}$`, inputType === InputType.KEYBOARD)

    targetNode.replace(formulaNode)

    return node === targetNode ? null : node
}

export default function EquationsPlugin(): JSX.Element | null {
    const [editor] = useLexicalComposerContext()

    const inputTypeRef = useRef<InputType>(InputType.KEYBOARD)

    useEffect(() => {
        if (!editor.hasNodes([EquationNode])) {
            throw new Error('EquationsPlugins: EquationsNode not registered on editor')
        }
    }, [editor])

    useEffect(() => {
        return mergeRegister(
            editor.registerCommand<CommandPayload>(
                INSERT_EQUATION_COMMAND,
                payload => {
                    const { equation, inline } = payload
                    const equationNode = $createEquationNode(equation, inline)

                    $insertNodes([equationNode])
                    if ($isRootOrShadowRoot(equationNode.getParentOrThrow())) {
                        $wrapNodeInElement(equationNode, $createParagraphNode).selectEnd()
                    }

                    return true
                },
                COMMAND_PRIORITY_EDITOR,
            ),
            editor.registerCommand(
                PASTE_COMMAND,
                () => {
                    inputTypeRef.current = InputType.PASTE
                    return false
                },
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerCommand(
                KEY_DOWN_COMMAND,
                () => {
                    inputTypeRef.current = InputType.KEYBOARD
                    return false
                },
                COMMAND_PRIORITY_LOW,
            ),
            editor.registerNodeTransform(TextNode, (node: TextNode) => {
                let targetNode: TextNode | null = node

                while (targetNode !== null) {
                    if (!targetNode.isSimpleText()) {
                        return
                    }

                    targetNode = $findAndTransformInputFormula(targetNode, inputTypeRef.current)
                }
            }),
        )
    }, [editor])

    return null
}
