declare global {
  namespace JSX {
    interface IntrinsicElements {
      'math-field': React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
    }
  }
}

declare module 'loggly-jslogger'
declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}