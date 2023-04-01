import { useIsInViewport } from "@/hooks/useIsInViewport";
import { AnimalProps } from "@/pages";
import parse from "html-react-parser";
import { useEffect, useRef } from "react";
import styles from "../styles/menuitem.module.css";

interface IProps {
  handleActiveSectionId(id: string): void;
}

export const MenuItem = ({
  id,
  header,
  text,
  img,
  handleActiveSectionId,
}: AnimalProps & IProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInViewport = useIsInViewport(ref, { threshold: 1 });

  useEffect(() => {
    if (isInViewport) handleActiveSectionId(id);
  }, [isInViewport]);

  return (
    <section ref={ref} id={header} className={styles.wrapper}>
      <h5>{header}</h5>
      <p>{parse(`${text}`)}</p>
      <img className={styles.img} src={img} alt="animal picture" />
    </section>
  );
};
