import { MenuItem } from "@/components/MenuItem";
import { SidebarMenu } from "@/components/SidebarMenu";
import React, { MutableRefObject, useEffect, useRef } from "react";
import styles from "../styles/index.module.css";

export default function Home() {
  const ref1: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref2: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref3: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref4: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref5: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref6: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const ref7: MutableRefObject<HTMLElement | undefined> = useRef(undefined);

  const navLink1: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink2: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink3: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink4: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink5: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink6: MutableRefObject<HTMLElement | undefined> = useRef(undefined);
  const navLink7: MutableRefObject<HTMLElement | undefined> = useRef(undefined);

  const imgs = [ref1, ref2, ref3, ref4, ref5, ref6, ref7];
  const navLinks = [
    navLink1,
    navLink2,
    navLink3,
    navLink4,
    navLink5,
    navLink6,
    navLink7,
  ];

  useEffect(() => {
    window.onscroll = () => {
      let current: string | null | undefined = "";

      imgs.forEach((img) => {
        const sectionTop = img.current?.offsetTop;
        if (scrollY + 400 >= sectionTop!) {
          current = img.current?.getAttribute("id");
        }
      });

      navLinks.forEach((li) => {
        li.current?.children[0].classList.remove("active");
        if (li.current?.attributes[0].value.includes(current as string)) {
          li.current?.children[0].classList.add("active");
        }
      });
    };
  }, []);

  // useEffect(() => {
  //   const imgObserver = new IntersectionObserver(
  //     (entries) => {
  //       const entry = entries[0];

  //       navLinks.forEach((navLink) => {
  //         navLink.current?.children[0].classList.remove("active");
  //         if (
  //           entry.isIntersecting &&
  //           navLink.current?.attributes[0].value.includes(entry.target.id)
  //         ) {
  //           navLink.current.children[0].classList.add("active");
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.94,
  //     }
  //   );

  //   imgs.forEach((img) => {
  //     imgObserver.observe(img.current as Element);
  //   });
  // }, []);

  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <SidebarMenu refs={navLinks} />
        <div>
          <MenuItem
            forwardedRef={ref1}
            header="polar bear"
            text={
              <p>
                Say hello to your new <strong>friend</strong>
              </p>
            }
            img="1.jpg"
          />
          <MenuItem
            forwardedRef={ref2}
            header="cheetah"
            text={
              <p>
                No petting before <strong>eating</strong>
              </p>
            }
            img="2.jpg"
          />
          <MenuItem
            forwardedRef={ref3}
            header="panda"
            text={
              <p>
                Eating always with <strong>pleasure</strong>
              </p>
            }
            img="3.jpg"
          />
          <MenuItem
            forwardedRef={ref4}
            header="fox"
            text={
              <p>
                Sometimes quite <strong>suspicious</strong>
              </p>
            }
            img="4.jpg"
          />
          <MenuItem
            forwardedRef={ref5}
            header="squirrel"
            text={
              <p>
                Staying <strong>curious</strong>
              </p>
            }
            img="5.jpg"
          />
          <MenuItem
            forwardedRef={ref6}
            header="butterfly"
            text={
              <p>
                <strong>Majestic</strong> every time of the day
              </p>
            }
            img="6.jpg"
          />
          <MenuItem
            forwardedRef={ref7}
            header="elephant"
            text={
              <p>
                It makes a <strong>huge</strong> difference
              </p>
            }
            img="7.jpg"
          />
        </div>
      </div>
    </div>
  );
}
