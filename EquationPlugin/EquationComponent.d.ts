/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}
import type { JSX } from 'react';
import { LexicalCommand, NodeKey } from 'lexical';
import { MathfieldElement } from 'mathlive';
export type FocusCustomInputPayload = {
    nodeKey: NodeKey;
    cursorPosition?: 'start' | 'end';
};
export declare const FOCUS_CUSTOM_INPUT_COMMAND: LexicalCommand<FocusCustomInputPayload>;
type EquationComponentProps = {
    equation: string;
    initialFocus: boolean;
    nodeKey: NodeKey;
};
export default function EquationComponent({ equation, nodeKey, initialFocus, }: EquationComponentProps): JSX.Element;
export {};
