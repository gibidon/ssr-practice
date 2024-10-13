import { ReactNode } from "react";

export function UiHeader({
  className,
  rightElem,
  leftElem,
}: {
  className?: string;
  leftElem?: ReactNode;
  rightElem?: ReactNode;
}) {
  return (
    <header
      className={`flex justify-between ${className}`}
    >
      {leftElem}
      {rightElem}
    </header>
  );
}