/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import '//unpkg.com/mathlive'

import type { JSX } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { useLexicalEditable } from '@lexical/react/useLexicalEditable'
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection'
import { mergeRegister } from '@lexical/utils'
import {
    $getNodeByKey,
    $getSelection,
    $isNodeSelection,
    BaseSelection,
    CLICK_COMMAND,
    COMMAND_PRIORITY_HIGH,
    COMMAND_PRIORITY_LOW,
    KEY_ESCAPE_COMMAND,
    NodeKey,
    SELECTION_CHANGE_COMMAND,
} from 'lexical'
import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import EquationEditor from './ui/EquationEditor'
import KatexRenderer from './ui/KatexRenderer'
import { $isEquationNode } from './EquationNode'
import './styles.css'

type EquationComponentProps = {
    equation: string
    inline: boolean
    nodeKey: NodeKey
}

export default function EquationComponent({
    equation,
    inline,
    nodeKey,
}: EquationComponentProps): JSX.Element {
    const [editor] = useLexicalComposerContext()
    const isEditable = useLexicalEditable()
    const [equationValue, setEquationValue] = useState(equation)
    const [showEquationEditor, setShowEquationEditor] = useState<boolean>(false)
    const [selection, setSelection] = useState<BaseSelection | null>(null)
    const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey)
    const ref = useRef(null)

    // const onHide = useCallback(
    //     (restoreSelection?: boolean) => {
    //         setShowEquationEditor(false)
    //         editor.update(() => {
    //             const node = $getNodeByKey(nodeKey)
    //             if ($isEquationNode(node)) {
    //                 node.setEquation(equationValue)
    //                 if (restoreSelection) {
    //                     node.selectNext(0, 0)
    //                 }
    //             }
    //         })
    //     },
    //     [editor, equationValue, nodeKey],
    // )

    useEffect(() => {
        if (equationValue !== equation) {
            setEquationValue(equation)
        }
    }, [equation, equationValue])

    useEffect(() => {
        // if (false) {
        //     return mergeRegister(
        //         editor.registerCommand(
        //             SELECTION_CHANGE_COMMAND,
        //             payload => {
        //                 const activeElement = document.activeElement
        //                 const inputElem = inputRef.current
        //                 if (inputElem !== activeElement) {
        //                     onHide()
        //                 }
        //                 return false
        //             },
        //             COMMAND_PRIORITY_HIGH,
        //         ),
        //         editor.registerCommand(
        //             KEY_ESCAPE_COMMAND,
        //             payload => {
        //                 console.log(payload)
        //                 const activeElement = document.activeElement
        //                 const inputElem = inputRef.current
        //                 if (inputElem === activeElement) {
        //                     onHide(true)
        //                     return true
        //                 }
        //                 return false
        //             },
        //             COMMAND_PRIORITY_HIGH,
        //         ),
        //     )
        // } else {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                setSelection(editorState.read(() => $getSelection()))
            }),
            editor.registerCommand<MouseEvent>(
                CLICK_COMMAND,
                payload => {
                    const event = payload
                    console.log(event.target)

                    if (event.target === ref.current) {
                        // editor.blur()
                        // event.target?.focus()

                        if (!event.shiftKey) {
                            clearSelection()
                        }
                        setSelected(!isSelected)
                        return true
                    }

                    return false
                },
                COMMAND_PRIORITY_LOW,
            ),
        )
    }, [editor, nodeKey, showEquationEditor])

    const isFocused = $isNodeSelection(selection) && isSelected

    const changeHandler = (evt: React.ChangeEvent<HTMLElement>) => {
        editor.update(() => {
            const node = $getNodeByKey(nodeKey)

            if ($isEquationNode(node)) {
                console.log('node', node)
                node.setEquation((evt.target as MathfieldElement).value)
            }
        })
    }

    console.log('VALUE', equationValue)

    return (
        <>
            <ErrorBoundary onError={e => editor._onError(e)} fallback={null}>
                <math-field
                    className={`EquationEditor_blockEditor  ${isFocused ? 'focused' : ''}`}
                    onInput={changeHandler}
                    ref={ref}
                >
                    {equationValue}
                </math-field>
            </ErrorBoundary>
        </>
    )
}
