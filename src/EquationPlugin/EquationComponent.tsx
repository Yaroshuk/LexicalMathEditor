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
    $createRangeSelection,
    $getNodeByKey,
    $getSelection,
    $isNodeSelection,
    $setSelection,
    BaseSelection,
    CLICK_COMMAND,
    COMMAND_PRIORITY_EDITOR,
    COMMAND_PRIORITY_HIGH,
    COMMAND_PRIORITY_LOW,
    CommandListener,
    KEY_DOWN_COMMAND,
    KEY_ENTER_COMMAND,
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
    //const [equationValue, setEquationValue] = useState(equation)
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
        if (ref.current === null) {
            return
        }

        const mathinput = ref.current as MathfieldElement
        mathinput.value = equation
        // if (equationValue !== equation) {
        //     setEquationValue(equation)
        // }
    }, [equation])

    useEffect(() => {
        return mergeRegister(
            editor.registerUpdateListener(({ editorState }) => {
                setSelection(editorState.read(() => $getSelection()))
            }),
            editor.registerCommand<MouseEvent>(
                CLICK_COMMAND,
                payload => {
                    const event = payload

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
    }, [clearSelection, editor, isSelected, nodeKey, setSelected, showEquationEditor])

    const isFocused = $isNodeSelection(selection) && isSelected

    const changeHandler = (value: string) => {
        editor.update(() => {
            const node = $getNodeByKey(nodeKey)

            console.log('changeHandler', node, value)

            if ($isEquationNode(node)) {
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

    const setEditorFocusAfterEquation = () => {
        //let selection = $getSelection()

        editor.update(() => {
            const node = $getNodeByKey(nodeKey)
            const parentNode = node?.getParent()

            if (!parentNode) {
                return
            }

            if (node) {
                const nodeIndex = parentNode.getChildren().indexOf(node)

                const selection = $createRangeSelection()

                if (nodeIndex === parentNode.getChildrenSize() - 1) {
                    selection.anchor.set(parentNode.__key, parentNode.getChildrenSize(), 'element')
                    selection.focus.set(parentNode.__key, parentNode.getChildrenSize(), 'element')
                } else {
                    // Иначе ставим курсор в начало следующей ноды
                    const nextNode = parentNode.getChildren()[nodeIndex + 1]

                    const offsetType = nextNode.getType() === 'text' ? 'text' : 'element'

                    selection.anchor.set(nextNode.__key, 0, offsetType)
                    selection.focus.set(nextNode.__key, 0, offsetType)
                }

                $setSelection(selection)
            }
        })
    }

    return (
        <>
            <span className={clsx(styles.MathField, isFocused && styles.Focused)}>
                <math-field
                    onInput={evt => changeHandler((evt.target as MathfieldElement).value)}
                    ref={elem => {
                        if (elem === null) {
                            return
                        }

                        const mathinput = elem as MathfieldElement
                        mathinput.value = equation

                        if (initialFocus) {
                            mathinput?.focus()

                            if (equation.includes('placeholder{}')) {
                                mathinput?.executeCommand('moveToNextPlaceholder')
                            } else {
                                mathinput?.executeCommand('moveToMathfieldEnd')
                            }
                        }

                        mathinput.onchange = (event: Event) => {
                            const target = event.target as MathfieldElement
                            console.log('onchange', target, target.value)
                            target.blur()
                            setTimeout(() => {
                                setEditorFocusAfterEquation()
                            }, 0)

                            event.stopPropagation()
                            return false
                        }

                        ref.current = elem
                    }}
                    tabIndex={-1}
                >
                    {/* {equationValue} */}
                </math-field>
            </span>
        </>
    )
}
