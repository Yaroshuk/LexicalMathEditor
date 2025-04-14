/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
    DOMConversionMap,
    DOMConversionOutput,
    EditorConfig,
    LexicalNode,
    NodeKey,
    SerializedLexicalNode,
    Spread,
} from 'lexical'
import type { JSX } from 'react'

import { DecoratorNode, DOMExportOutput } from 'lexical'
import * as React from 'react'
import { node } from 'prop-types'

const EquationComponent = React.lazy(() => import('./EquationComponent'))

export type SerializedEquationNode = Spread<
    {
        equation: string
        initialFocus: boolean
    },
    SerializedLexicalNode
>

function $convertEquationElement(domNode: HTMLElement): null | DOMConversionOutput {
    let equation = domNode.getAttribute('data-lexical-equation')
    const inline = domNode.getAttribute('data-lexical-inline') === 'true'
    // Decode the equation from base64
    equation = atob(equation || '')
    if (equation) {
        const node = $createEquationNode(equation, inline)
        return { node }
    }

    return null
}

export class EquationNode extends DecoratorNode<JSX.Element> {
    __equation: string
    __initialFocus: boolean

    static getType(): string {
        return 'equation'
    }

    static clone(node: EquationNode): EquationNode {
        // console.log('clone', node)
        return new EquationNode(node.__equation, node.__initialFocus, node.__key)
    }

    constructor(equation: string, initialFocus?: boolean, key?: NodeKey) {
        // console.log('key', key, equation)

        super(key)
        this.__equation = equation
        this.__initialFocus = initialFocus ?? false
    }

    static importJSON(serializedNode: SerializedEquationNode): EquationNode {
        return $createEquationNode(
            serializedNode.equation,
            serializedNode.initialFocus,
        ).updateFromJSON(serializedNode)
    }

    exportJSON(): SerializedEquationNode {
        return {
            ...super.exportJSON(),
            equation: this.getEquation(),
            initialFocus: this.__initialFocus,
        }
    }

    createDOM(_config: EditorConfig): HTMLElement {
        const element = document.createElement('span')
        // EquationNodes should implement `user-action:none` in their CSS to avoid issues with deletion on Android.
        element.style.display = 'inline-block'
        element.className = 'editor-equation'
        return element
    }

    exportDOM(): DOMExportOutput {
        const element = document.createElement('span')
        const equation = btoa(this.__equation)
        element.setAttribute('data-lexical-equation', equation)

        return { element }
    }

    static importDOM(): DOMConversionMap | null {
        return {
            span: (domNode: HTMLElement) => {
                if (!domNode.hasAttribute('data-lexical-equation')) {
                    return null
                }
                return {
                    conversion: $convertEquationElement,
                    priority: 1,
                }
            },
        }
    }

    updateDOM(prevNode: this): boolean {
        // console.log(
        //     'update',
        //     this.__key,
        //     this.__type,
        //     this.__equation,
        //     this.__initialFocus,
        //     prevNode.__initialFocus,
        // )

        return false
    }

    getTextContent(): string {
        return this.__equation
    }

    getEquation(): string {
        return this.__equation
    }

    setEquation(equation: string): void {
        const writable = this.getWritable()
        writable.__equation = equation
    }

    setInitialFocus(initialFocus: boolean): void {
        const writable = this.getWritable()
        writable.__initialFocus = initialFocus
    }

    decorate(): JSX.Element {
        const nodeFormula = (
            <EquationComponent
                equation={this.__equation}
                initialFocus={this.__initialFocus}
                nodeKey={this.__key}
            />
        )

        return nodeFormula
    }
}

export function $createEquationNode(equation = '', initialFocus = false): EquationNode {
    return new EquationNode(equation, initialFocus)
}

export function $isEquationNode(node: LexicalNode | null | undefined): node is EquationNode {
    return node instanceof EquationNode
}
