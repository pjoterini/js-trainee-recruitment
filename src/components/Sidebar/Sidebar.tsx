import { ReactNode } from "react";
import styles from "./sidebar.module.css";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className={styles.wrapper}>
      <h4>Your new gang</h4>
      <ul className={styles.ul}>{children}</ul>
    </div>
  );
};
