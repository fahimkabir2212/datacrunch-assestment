import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-16 ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
