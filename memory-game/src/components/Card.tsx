import React from 'react'
import { BackImg, FrontImg, Wrapper } from '../styles/Card.styles'
import { CardType } from '../utils/Setup'


type CardProps={
    card:CardType;
    callBack:(card:CardType) => void;
}

const Card:React.FC<CardProps>=({card,callBack})=> {

    const handleOnClick=()=>{
        if(card.clickable) callBack(card);
    }

    return (
        <Wrapper onClick={handleOnClick} >
            <FrontImg flipped={card.flipped} src={card.frontImage} />
            <BackImg flipped={card.flipped} src={card.backImage} />
        </Wrapper>
    )
}

export default Card
