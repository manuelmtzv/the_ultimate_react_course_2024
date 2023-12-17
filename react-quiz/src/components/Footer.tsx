import { ReactNode } from "react";

export default function Footer({ children }: Props) {
  return <footer>{children}</footer>;
}

interface Props {
  children: ReactNode;
}
