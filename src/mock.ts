import { v4 as uuid } from "uuid";

export interface AnimalProps {
  uuid?: string;
  header: string;
  text: string;
  img: string;
}

export const animals: AnimalProps[] = [
  {
    uuid: uuid(),
    header: "polar bear",
    text: `Say hello to your new <strong>friend</strong>`,
    img: "1.jpg",
  },
  {
    uuid: uuid(),
    header: "cheetah",
    text: `No petting before <strong>eating</strong>`,
    img: "2.jpg",
  },
  {
    uuid: uuid(),
    header: "panda",
    text: `Eating always with <strong>pleasure</strong>`,
    img: "3.jpg",
  },
  {
    uuid: uuid(),
    header: "fox",
    text: `Sometimes quite <strong>suspicious</strong>`,
    img: "4.jpg",
  },
  {
    uuid: uuid(),
    header: "squirrel",
    text: `Staying <strong>curious</strong>`,
    img: "5.jpg",
  },
  {
    uuid: uuid(),
    header: "butterfly",
    text: `<strong>Majestic</strong> every time of the day`,
    img: "6.jpg",
  },
  {
    uuid: uuid(),
    header: "elephant",
    text: `It makes a <strong>huge</strong> difference`,
    img: "7.jpg",
  },
];
