import { AnimalProps } from "@/pages";
import React, { forwardRef, LegacyRef } from "react";

export const Link = forwardRef(
  ({ header }: AnimalProps, ref: LegacyRef<HTMLAnchorElement> | undefined) => {
    return (
      <a ref={ref} href={`#${header}`}>
        <li>{header}</li>
      </a>
    );
  }
);
