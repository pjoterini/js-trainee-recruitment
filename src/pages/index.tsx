import { Link } from "@/components/Link";
import { MenuItem } from "@/components/MenuItem";
import { SidebarMenu } from "@/components/SidebarMenu";
import { useEffect, useRef } from "react";
import styles from "../styles/index.module.css";

export interface AnimalProps {
  header: string;
  text: string;
  img: string;
}

export default function Home() {
  const animals: AnimalProps[] = [
    {
      header: "polar bear",
      text: `Say hello to your new <strong>friend</strong>`,
      img: "1.jpg",
    },
    {
      header: "cheetah",
      text: `No petting before <strong>eating</strong>`,
      img: "2.jpg",
    },
    {
      header: "panda",
      text: `Eating always with <strong>pleasure</strong>`,
      img: "3.jpg",
    },
    {
      header: "fox",
      text: `Sometimes quite <strong>suspicious</strong>`,
      img: "4.jpg",
    },
    {
      header: "squirrel",
      text: `Staying <strong>curious</strong>`,
      img: "5.jpg",
    },
    {
      header: "butterfly",
      text: `<strong>Majestic</strong> every time of the day`,
      img: "6.jpg",
    },
    {
      header: "elephant",
      text: `It makes a <strong>huge</strong> difference`,
      img: "7.jpg",
    },
  ];

  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, animals.length);
    console.log(cardRefs.current);
  }, [animals]);

  const linkRefs = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    linkRefs.current = linkRefs.current.slice(0, animals.length);
    console.log(linkRefs.current);
  }, [animals]);

  useEffect(() => {
    const scrollingFunction = () => {
      let current: string | null | undefined = "";

      cardRefs.current.forEach((card) => {
        const sectionTop = card?.offsetTop;
        if (scrollY + 400 >= sectionTop!) {
          current = card?.getAttribute("id");
        }
      });

      linkRefs.current.forEach((link) => {
        link?.children[0].classList.remove("active");
        if (link?.attributes[0].value.includes(current as string)) {
          link?.children[0].classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", scrollingFunction);

    return () => {
      window.removeEventListener("scroll", scrollingFunction);
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <SidebarMenu>
          {animals.map((link, id) => {
            return (
              <Link
                key={id}
                ref={(ref) => (linkRefs.current[id] = ref)}
                header={link.header}
                text={link.text}
                img={link.img}
              />
            );
          })}
        </SidebarMenu>
        <div>
          {animals.map((card, id) => {
            return (
              <MenuItem
                key={id}
                ref={(ref) => (cardRefs.current[id] = ref)}
                header={card.header}
                text={card.text}
                img={card.img}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
