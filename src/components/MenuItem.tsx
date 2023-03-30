import { AnimalProps } from "@/pages";
import parse from "html-react-parser";
import { forwardRef, LegacyRef } from "react";
import styles from "../styles/menuitem.module.css";

export const MenuItem = forwardRef(
  (
    { header, text, img }: AnimalProps,
    ref: LegacyRef<HTMLElement> | undefined
  ) => {
    return (
      <section ref={ref} id={header} className={styles.wrapper}>
        <h5>{header}</h5>
        <p>{parse(`${text}`)}</p>
        <img className={styles.img} src={img} alt="animal picture" />
      </section>
    );
  }
);
