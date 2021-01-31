import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  disabled: boolean;
}

export default function Button({ disabled, children }: Props) {
  return <button disabled={disabled}>{children}</button>
}