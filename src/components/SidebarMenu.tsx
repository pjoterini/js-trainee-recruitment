import { AnimalProps } from "@/pages";
import { ReactNode, useEffect, useRef } from "react";
import styles from "../styles/sidebarmenu.module.css";

interface SidebarProps {
  children: ReactNode;
}

export const SidebarMenu = ({ children }: SidebarProps) => {
  return (
    <div className={styles.wrapper}>
      <h4>Your new gang</h4>
      <ul className={styles.ul}>{children}</ul>
    </div>
  );
};
