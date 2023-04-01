export interface AnimalProps {
  header: string;
  text: string;
  img: string;
}

export const animals: AnimalProps[] = [
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
