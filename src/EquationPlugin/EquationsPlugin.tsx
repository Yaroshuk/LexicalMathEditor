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
    createCommand,
    LexicalCommand,
    LexicalEditor,
    TextNode,
} from 'lexical'
import { useCallback, useEffect } from 'react'
import { $createEquationNode, EquationNode } from './EquationNode'
import KatexEquationAlterer from './ui/KatexEquationAlterer'
import { $createEmojiNode } from 'src/EmojiPlugin/EmojiNode'
import { findFormulaInputs } from './helpers/findFormulaInputs'

type CommandPayload = {
    equation: string
    inline: boolean
}

export const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload> =
    createCommand('INSERT_EQUATION_COMMAND')

export function InsertEquationDialog({
    activeEditor,
    onClose,
}: {
    activeEditor: LexicalEditor
    onClose: () => void
}): JSX.Element {
    const onEquationConfirm = useCallback(
        (equation: string, inline: boolean) => {
            activeEditor.dispatchCommand(INSERT_EQUATION_COMMAND, { equation, inline })
            onClose()
        },
        [activeEditor, onClose],
    )

    return <KatexEquationAlterer onConfirm={onEquationConfirm} />
}

const emojis: Map<string, [string, string]> = new Map([
    [':)', ['emoji happysmile', '🙂']],
    [':D', ['emoji veryhappysmile', '😀']],
    [':(', ['emoji unhappysmile', '🙁']],
    ['<3', ['emoji heart', '❤']],
])

function $findAndTransformEmoji(node: TextNode): null | TextNode {
    const text = node.getTextContent()

    const fourmulaInputs = findFormulaInputs(text)

    console.log('FORMULA', fourmulaInputs)

    if (!fourmulaInputs.length) {
        return null
    }


    for (let i = 0; i < text.length; i++) {
        const emojiData = emojis.get(text[i]) || emojis.get(text.slice(i, i + 2))

        if (emojiData !== undefined) {
            const [emojiStyle, emojiText] = emojiData
            let targetNode

            if (i === 0) {
                ;[targetNode] = node.splitText(i + 2)
            } else {
                ;[, targetNode] = node.splitText(i, i + 2)
            }

            const emojiNode = $createEmojiNode(emojiStyle, emojiText)
            targetNode.replace(emojiNode)
            return emojiNode
        }
    }

    return null
}

function $textNodeTransform(node: TextNode): void {
    let targetNode: TextNode | null = node

    while (targetNode !== null) {
        if (!targetNode.isSimpleText()) {
            return
        }

        targetNode = $findAndTransformEmoji(targetNode)
    }
}

export default function EquationsPlugin(): JSX.Element | null {
    const [editor] = useLexicalComposerContext()

    useEffect(() => {
        if (!editor.hasNodes([EquationNode])) {
            throw new Error('EquationsPlugins: EquationsNode not registered on editor')
        }

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
        )

        return editor.registerNodeTransform(TextNode, $textNodeTransform)
    }, [editor])

    return null
}
