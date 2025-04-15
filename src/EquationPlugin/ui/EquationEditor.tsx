/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { JSX, Ref, RefObject } from 'react'

import './EquationEditor.css'

import { isHTMLElement } from 'lexical'
import { ChangeEvent, forwardRef } from 'react'
import { MathfieldElement } from 'mathlive'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'math-field': React.DetailedHTMLProps<
                React.HTMLAttributes<MathfieldElement>,
                MathfieldElement
            >
        }
    }
}

type BaseEquationEditorProps = {
    equation: string
    inline: boolean
    setEquation: (equation: string) => void
}

function EquationEditor(
    { equation, setEquation, inline }: BaseEquationEditorProps,
    forwardedRef: Ref<HTMLInputElement | MathfieldElement>,
): JSX.Element {
    const onChange = (event: ChangeEvent) => {
        // const target = event.target as MathfieldElement
        setEquation((event.target as MathfieldElement).value)
    }

    return inline && isHTMLElement(forwardedRef) ? (
        <span className="EquationEditor_inputBackground">
            <span className="EquationEditor_dollarSign">$</span>
            <input
                className="EquationEditor_inlineEditor"
                value={equation}
                onChange={onChange}
                autoFocus={true}
                ref={forwardedRef as RefObject<HTMLInputElement>}
            />
            <span className="EquationEditor_dollarSign">$</span>
        </span>
    ) : (
        <span className="EquationEditor_inputBackground">

            {/* <textarea className="EquationEditor_blockEditor" value={equation} onChange={onChange} /> */}
        </span>
    )
}

export default forwardRef(EquationEditor)
