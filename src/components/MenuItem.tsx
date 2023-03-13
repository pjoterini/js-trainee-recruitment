import React, { LegacyRef, ReactElement, useEffect } from "react";
import styles from "../styles/menuitem.module.css";
import { MutableRefObject } from "react";

interface MenuItemProps {
  header: string;
  text: ReactElement;
  img: string;
  forwardedRef: MutableRefObject<HTMLElement | undefined>;
}

export const MenuItem = ({
  header,
  text,
  img,
  forwardedRef,
}: MenuItemProps) => {
  return (
    <section
      ref={forwardedRef as MutableRefObject<HTMLElement>}
      id={header}
      className={styles.wrapper}
    >
      <h5>{header}</h5>
      {text}
      <img className={styles.img} src={img} alt="animal picture" />
    </section>
  );
};
