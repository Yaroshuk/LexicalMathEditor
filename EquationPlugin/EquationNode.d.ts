/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { DOMConversionMap, EditorConfig, LexicalNode, NodeKey, SerializedLexicalNode, Spread } from 'lexical';
import type { JSX } from 'react';
import { DecoratorNode, DOMExportOutput } from 'lexical';
export type SerializedEquationNode = Spread<{
    equation: string;
    initialFocus: boolean;
}, SerializedLexicalNode>;
export declare class EquationNode extends DecoratorNode<JSX.Element> {
    __equation: string;
    __initialFocus: boolean;
    static getType(): string;
    static clone(node: EquationNode): EquationNode;
    constructor(equation: string, initialFocus?: boolean, key?: NodeKey);
    static importJSON(serializedNode: SerializedEquationNode): EquationNode;
    exportJSON(): SerializedEquationNode;
    createDOM(_config: EditorConfig): HTMLElement;
    exportDOM(): DOMExportOutput;
    static importDOM(): DOMConversionMap | null;
    updateDOM(): boolean;
    getTextContent(): string;
    getEquation(): string;
    setEquation(equation: string): void;
    setInitialFocus(initialFocus: boolean): void;
    decorate(): JSX.Element;
}
export declare function $createEquationNode(equation?: string, initialFocus?: boolean): EquationNode;
export declare function $isEquationNode(node: LexicalNode | null | undefined): node is EquationNode;
