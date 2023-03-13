import React, { MutableRefObject } from "react";
import styles from "../styles/sidebarmenu.module.css";

interface SidebarProps {
  refs: MutableRefObject<HTMLElement | undefined>[];
}

export const SidebarMenu = ({ refs }: SidebarProps) => {
  return (
    <div className={styles.wrapper}>
      <h4>Your new gang</h4>
      <ul className={styles.ul}>
        <a
          ref={refs[0] as MutableRefObject<HTMLAnchorElement>}
          href="#polar bear"
        >
          <li className="active">Polar Bear</li>
        </a>
        <a ref={refs[1] as MutableRefObject<HTMLAnchorElement>} href="#cheetah">
          <li>Cheetah</li>
        </a>
        <a ref={refs[2] as MutableRefObject<HTMLAnchorElement>} href="#panda">
          <li>Panda</li>
        </a>
        <a ref={refs[3] as MutableRefObject<HTMLAnchorElement>} href="#fox">
          <li>Fox</li>
        </a>
        <a
          ref={refs[4] as MutableRefObject<HTMLAnchorElement>}
          href="#squirrel"
        >
          <li>Squirrel</li>
        </a>
        <a
          ref={refs[5] as MutableRefObject<HTMLAnchorElement>}
          href="#butterfly"
        >
          <li>Butterfly</li>
        </a>
        <a
          ref={refs[6] as MutableRefObject<HTMLAnchorElement>}
          href="#elephant"
        >
          <li>Elephant</li>
        </a>
      </ul>
    </div>
  );
};
