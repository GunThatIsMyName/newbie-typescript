import React from "react";
import { Wrapper } from "./styles/Card.style";

type CardProps = {
  logo: string;
  video: string;
};

const Card: React.FC<CardProps> = ({ logo, video }) => {
  const handleMouseOver = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.play();

  const handleMouseOut = (e: React.MouseEvent<HTMLVideoElement>) =>
    e.currentTarget.pause();

  return (
    <Wrapper>
      <div className="border" />
      <img src={logo} alt={logo} />
      <video
        loop
        muted
        preload="none"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        src={video}
      />
    </Wrapper>
  );
};

export default Card;
