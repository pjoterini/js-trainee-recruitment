import { AnimalProps } from "./pages";
import { v4 as uuid } from "uuid";

export const animals: AnimalProps[] = [
  {
    id: uuid(),
    header: "polar bear",
    text: `Say hello to your new <strong>friend</strong>`,
    img: "1.jpg",
  },
  {
    id: uuid(),
    header: "cheetah",
    text: `No petting before <strong>eating</strong>`,
    img: "2.jpg",
  },
  {
    id: uuid(),
    header: "panda",
    text: `Eating always with <strong>pleasure</strong>`,
    img: "3.jpg",
  },
  {
    id: uuid(),
    header: "fox",
    text: `Sometimes quite <strong>suspicious</strong>`,
    img: "4.jpg",
  },
  {
    id: uuid(),
    header: "squirrel",
    text: `Staying <strong>curious</strong>`,
    img: "5.jpg",
  },
  {
    id: uuid(),
    header: "butterfly",
    text: `<strong>Majestic</strong> every time of the day`,
    img: "6.jpg",
  },
  {
    id: uuid(),
    header: "elephant",
    text: `It makes a <strong>huge</strong> difference`,
    img: "7.jpg",
  },
];
