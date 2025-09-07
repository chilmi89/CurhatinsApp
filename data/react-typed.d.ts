// types/react-typed.d.ts
declare module "react-typed" {
  import * as React from "react";

  export interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    startDelay?: number;
    backDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    className?: string;
  }

  export class Typed extends React.Component<TypedProps> {}
  export default Typed;
}
