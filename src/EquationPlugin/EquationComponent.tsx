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
import { $getNearestNodeOfType, mergeRegister } from '@lexical/utils'
import {
    $createRangeSelection,
    $getNodeByKey,
    $getSelection,
    $isNodeSelection,
    $isParagraphNode,
    $isRangeSelection,
    $setSelection,
    BaseSelection,
    CLICK_COMMAND,
    COMMAND_PRIORITY_HIGH,
    COMMAND_PRIORITY_LOW,
    CommandListener,
    createCommand,
    ElementNode,
    KEY_DOWN_COMMAND,
    LexicalCommand,
    LexicalEditor,
    LexicalNode,
    NodeKey,
    TextNode,
} from 'lexical'
import { useCallback, useEffect, useRef, useState } from 'react'

import { $isEquationNode, EquationNode } from './EquationNode'
import styles from './Equations.module.scss'
import { MathfieldElement } from 'mathlive'
import clsx from 'clsx'

export type FocusCustomInputPayload = {
    nodeKey: NodeKey
    cursorPosition?: 'start' | 'end'
}

export const FOCUS_CUSTOM_INPUT_COMMAND: LexicalCommand<FocusCustomInputPayload> =
    createCommand('focus-custom-input')

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
    const [prevoiusMathSelection, setPrevoiusMathSelection] = useState<[number, number] | null>(
        null,
    )

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

    const registerCustomInputCommands = useCallback(
        (editor: LexicalEditor) => {
            return mergeRegister(
                editor.registerCommand<FocusCustomInputPayload>(
                    FOCUS_CUSTOM_INPUT_COMMAND,
                    payload => {
                        if (payload?.nodeKey !== nodeKey) {
                            return false
                        }

                        const mathElement = ref.current as MathfieldElement

                        if (!mathElement) {
                            return false
                        }

                        editor.blur()
                        mathElement.focus()

                        if (payload.cursorPosition === 'end') {
                            mathElement.executeCommand('moveToMathfieldEnd')
                        }

                        if (payload.cursorPosition === 'start') {
                            mathElement.executeCommand('moveToMathfieldStart')
                        }

                        return true
                    },
                    COMMAND_PRIORITY_HIGH,
                ),
            )
        },
        [nodeKey],
    )

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
    }, [equation])

    const onEditorKeyDownHandler: CommandListener<KeyboardEvent> = useCallback((event, editor) => {
        const target = event.target as HTMLElement

        //console.log('keydown', target, target.dataset)

        if (!target.dataset?.lexicalEditor) return false

        const selection = $getSelection()

        //console.log('selection', selection, event.key, event.shiftKey)

        if (!$isRangeSelection(selection) || selection.isCollapsed() === false) {
            return false
        }

        const anchorNode = selection.anchor.getNode()

        if (event.key === 'ArrowLeft') {
            let node: LexicalNode | null = null

            //console.log('left', selection, anchorNode)

            if ($isParagraphNode(anchorNode)) {
                if (
                    selection.getNodes().length === 1 &&
                    selection.getNodes()[0].__type === 'equation'
                ) {
                    node = selection.getNodes()[0]
                }
            } else if (selection.anchor.offset === 0) {
                node = anchorNode.getPreviousSibling()
            }

            if (!node) return false

            // if (node.getIndexWithinParent() === 0) {
            //     return false
            // }

            if (node && node.__type === 'equation') {
                editor.dispatchCommand(FOCUS_CUSTOM_INPUT_COMMAND, {
                    nodeKey: node.__key,
                    cursorPosition: 'end',
                })
                event.preventDefault()
                return true
            }
        }

        if (event.key === 'ArrowRight') {
            let node: LexicalNode | null = null

            if ($isParagraphNode(anchorNode)) {
                if (
                    selection.getNodes().length === 1 &&
                    selection.getNodes()[0].__type === 'equation'
                ) {
                    node = selection.getNodes()[0]
                }
            } else if (selection.anchor.offset === anchorNode.getTextContent().length) {
                node = anchorNode.getNextSibling()
            }

            if (!node) return false

            // if (node.getIndexWithinParent() + 1 === node.getParent()?.getChildrenSize()) {
            //     return false
            // }

            console.log(
                'right',
                $getNearestNodeOfType(node, ElementNode),
                node.getIndexWithinParent(),
                node.getParent()?.getChildrenSize(),
            )

            if (node && node.__type === 'equation') {
                editor.dispatchCommand(FOCUS_CUSTOM_INPUT_COMMAND, {
                    nodeKey: node.__key,
                    cursorPosition: 'start',
                })
                event.preventDefault()
                return true
            }
        }

        return false
    }, [])

    const setEditorFocus = useCallback(
        (node: LexicalNode, position: 'after' | 'before' = 'after') => {
            if (!node) {
                return
            }
            const parentNode = node.getParent()
            if (!parentNode) {
                return
            }

            const nodeIndex = parentNode.getChildren().indexOf(node)
            const selection = $createRangeSelection()
            if (position === 'after') {
                if (nodeIndex === parentNode.getChildrenSize() - 1) {
                    selection.anchor.set(parentNode.__key, parentNode.getChildrenSize(), 'element')
                    selection.focus.set(parentNode.__key, parentNode.getChildrenSize(), 'element')
                } else {
                    const nextNode = parentNode.getChildren()[nodeIndex + 1]
                    const offsetType = nextNode.getType() === 'text' ? 'text' : 'element'
                    selection.anchor.set(nextNode.__key, 0, offsetType)
                    selection.focus.set(nextNode.__key, 0, offsetType)
                }
            } else {
                if (nodeIndex === 0) {
                    selection.anchor.set(parentNode.__key, 0, 'element')
                    selection.focus.set(parentNode.__key, 0, 'element')
                } else {
                    const prevNode = parentNode.getChildren()[nodeIndex - 1]
                    const offsetType = prevNode.getType() === 'text' ? 'text' : 'element'
                    selection.anchor.set(
                        prevNode.__key,
                        prevNode.getTextContent().length,
                        offsetType,
                    )
                    selection.focus.set(
                        prevNode.__key,
                        prevNode.getTextContent().length,
                        offsetType,
                    )
                }
            }
            $setSelection(selection)
            editor.focus()
        },
        [editor],
    )

    const onMathFieldKeyDownHandler: CommandListener<KeyboardEvent> = useCallback(
        event => {
            const target = event.target as MathfieldElement

            const selection = target.selection
            const contentValue = target.value

            const nodeKey = target.dataset.key

            if (!nodeKey) {
                return false
            }

            const node = $getNodeByKey(nodeKey)

            if (!node) {
                return false
            }

            if (event.key === 'ArrowLeft') {
                if (selection.ranges[0][0] === 0 && selection.ranges[0][1] === 0) {
                    target.blur()

                    setEditorFocus(node, 'before')

                    return true
                }

                return false
            }

            if (event.key === 'ArrowRight') {
                const selectedValue = target.getValue(0, selection.ranges[0][1])

                if (contentValue.length === selectedValue.length) {
                    target.blur()

                    setEditorFocus(node, 'after')

                    return true
                }

                return false
            }

            return false
        },
        [setEditorFocus],
    )

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
            editor.registerCommand<KeyboardEvent>(
                KEY_DOWN_COMMAND,
                payload => {
                    const target = payload.target as HTMLElement

                    if (target.tagName === 'MATH-FIELD') {
                        return onMathFieldKeyDownHandler(payload, editor)
                    }

                    return onEditorKeyDownHandler(payload, editor)
                },
                COMMAND_PRIORITY_HIGH,
            ),
        )
    }, [
        clearSelection,
        editor,
        isSelected,
        nodeKey,
        onEditorKeyDownHandler,
        onMathFieldKeyDownHandler,
        setSelected,
        showEquationEditor,
    ])

    useEffect(() => {
        registerCustomInputCommands(editor)
    }, [editor, registerCustomInputCommands])

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

    const setEditorFocusAfterEquation = () => {
        //let selection = $getSelection()

        editor.update(() => {
            const node = $getNodeByKey(nodeKey)

            if (node) {
                setEditorFocus(node, 'after')
            }
        })
    }

    return (
        <>
            <span className={clsx(styles.MathField, isFocused && styles.Focused)}>
                <math-field
                    onInput={evt => changeHandler((evt.target as MathfieldElement).value)}
                    data-key={nodeKey}
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
