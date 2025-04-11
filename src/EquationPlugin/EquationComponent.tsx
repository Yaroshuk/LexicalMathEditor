/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<
                React.HTMLAttributes<MathfieldElement>,
                MathfieldElement
            >
        }
    }
}

import '//unpkg.com/mathlive'

import type { JSX } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
//import { useLexicalEditable } from '@lexical/react/useLexicalEditable'
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection'
import { mergeRegister } from '@lexical/utils'
import {
    $getNodeByKey,
    $getSelection,
    $isNodeSelection,
    BaseSelection,
    CLICK_COMMAND,
    COMMAND_PRIORITY_LOW,
    NodeKey,
} from 'lexical'
import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { $isEquationNode, EquationNode } from './EquationNode'
import styles from './Equations.module.scss'
import { MathfieldElement } from 'mathlive'
import clsx from 'clsx'

type EquationComponentProps = {
    equation: string
    initialFocus: boolean
    nodeKey: NodeKey
}

export default function EquationComponent({
    equation,
    nodeKey,
    initialFocus,
}: EquationComponentProps): JSX.Element {
    const [editor] = useLexicalComposerContext()
    //const isEditable = useLexicalEditable()
    const [equationValue, setEquationValue] = useState(equation)
    const [showEquationEditor] = useState<boolean>(false)
    const [selection, setSelection] = useState<BaseSelection | null>(null)
    const [isSelected, setSelected, clearSelection] = useLexicalNodeSelection(nodeKey)
    const ref = useRef<MathfieldElement | null>(null)
    const [MathField, setMathField] = useState<MathfieldElement | null>(null)

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
        if (initialFocus) {
            editor.update(() => {
                const node = $getNodeByKey(nodeKey)

                if (node) {
                    const writable = node.getWritable() as EquationNode

                    writable.__initialFocus = false
                }
            })
        }
    }, [initialFocus, editor, nodeKey])

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

    const changeHandler = (value: string) => {
        editor.update(() => {
            const node = $getNodeByKey(nodeKey)

            if ($isEquationNode(node)) {
                console.log('node', node)
                node.setEquation(value)
            }
        })
    }

    // useEffect(() => {
    //     const field = new MathfieldElement()
    //     field.value = equationValue
    //     field.oninput = (event: Event) => {
    //         const target = event.target as MathfieldElement
    //         changeHandler(target.value)
    //     }

    //     //setMathField(field)
    // }, [equationValue, changeHandler])

    //console.log('VALUE', equationValue)

    return (
        <>
            <div className={clsx(styles.MathField, isFocused && styles.Focused)}>
                <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    width="0"
                    height="0"
                    alt=""
                />
                <math-field
                    onInput={evt => changeHandler((evt.target as MathfieldElement).value)}
                    ref={elem => {
                        const mathinput = elem as MathfieldElement

                        if (initialFocus && mathinput) {
                            console.log('initial', initialFocus, mathinput)
                            mathinput?.focus()
                            mathinput.executeCommand('moveToMathfieldEnd')
                        }

                        ref.current = elem
                    }}
                    tabIndex={-1}
                >
                    {equationValue}
                </math-field>
                <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    width="0"
                    height="0"
                    alt=""
                />
            </div>
        </>
    )
}
