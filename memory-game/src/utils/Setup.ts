import image1 from "../assets/one.jpeg";
import image2 from "../assets/two.jpeg";
import image3 from "../assets/three.jpeg";
import image4 from "../assets/four.jpeg";
import image5 from "../assets/five.jpeg";
import image6 from "../assets/six.jpeg";
import image7 from "../assets/seven.jpeg";
import image8 from "../assets/eigth.jpeg";
import back from "../assets/back.jpeg";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cards: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];


export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((item, index) => {
    return {
      id: `item${index}`,
      flipped: false,
      backImage: back,
      frontImage: item,
      clickable: true,
      matchingCardId:
        index < cards.length
          ? `item${index + cards.length}`
          : `item${index - cards.length}`,
    };
  });

