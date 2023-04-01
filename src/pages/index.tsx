import { AnimalPost } from "@/components/AnimalPost/AnimalPost";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SidebarLink } from "@/components/Sidebar/SidebarLink";
import { animals } from "@/mock";
import { useEffect, useRef } from "react";
import { throttle } from "throttle-debounce";
import { v4 as uuid } from "uuid";

export default function Home() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const linkRefs = useRef<Array<HTMLElement | null>>([]);

  const highlightCurrentAnimal = () => {
    let current: string | null | undefined = "";

    cardRefs.current.forEach((card) => {
      const sectionTop = card?.offsetTop;
      if (scrollY + 400 >= sectionTop!) {
        current = card?.getAttribute("id");
      }
    });

    linkRefs.current.forEach((link) => {
      link?.children[0].classList.remove("active");
      if (link?.attributes[0].value.includes(current!)) {
        link?.children[0].classList.add("active");
      }
    });
  };

  const throttleHighlightCurrentAnimal = throttle(200, () => {
    highlightCurrentAnimal();
  });

  useEffect(() => {
    console.log(cardRefs.current);
    console.log(linkRefs.current);
    window.addEventListener("scroll", throttleHighlightCurrentAnimal);

    return () => {
      window.removeEventListener("scroll", throttleHighlightCurrentAnimal);
    };
  }, []);

  return (
    <div className="background">
      <div className="wrapper">
        <Sidebar>
          {animals.map((link, idx) => {
            return (
              <SidebarLink
                key={uuid()}
                ref={(ref) => (linkRefs.current[idx] = ref)}
                header={link.header}
                text={link.text}
                img={link.img}
              />
            );
          })}
        </Sidebar>
        <div>
          {animals.map((card, idx) => {
            return (
              <AnimalPost
                key={uuid()}
                ref={(ref) => (cardRefs.current[idx] = ref)}
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
