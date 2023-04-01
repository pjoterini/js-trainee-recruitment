import { Link } from "@/components/Link";
import { MenuItem } from "@/components/MenuItem";
import { SidebarMenu } from "@/components/SidebarMenu";
import { animals } from "@/mock";
import { useState } from "react";
import styles from "../styles/index.module.css";

export interface AnimalProps {
  id: string;
  header: string;
  text: string;
  img: string;
}

export default function Home() {
  const [activeSectionId, setActiveSectionId] = useState<string>();

  const handleActiveSectionId = (id: string) => setActiveSectionId(id);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <SidebarMenu>
          {animals.map((link) => (
            <Link
              key={link.id}
              active={activeSectionId === link.id}
              {...link}
            />
          ))}
        </SidebarMenu>
        <div>
          {animals.map((card) => (
            <MenuItem
              key={card.id}
              handleActiveSectionId={handleActiveSectionId}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
