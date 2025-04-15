/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JSX } from 'react';
import { LexicalCommand } from 'lexical';
type CommandPayload = {
    equation: string;
    initialFocus: boolean;
};
export declare const INSERT_EQUATION_COMMAND: LexicalCommand<CommandPayload>;
export default function EquationsPlugin(): JSX.Element | null;
export {};
