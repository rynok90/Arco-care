import type { ComponentProps, ReactNode } from "react";

export default function Link({
  href,
  children,
  ...props
}: ComponentProps<"a"> & { href: string; children?: ReactNode }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
