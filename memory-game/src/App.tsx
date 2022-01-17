import React, { useState } from "react";
// Setup
import { createBoard } from "./utils/Setup";
import { shuffleArray } from "./utils/utils";

// Type
import { CardType } from "./utils/Setup";
import { Grid } from "./styles/App.styles";
import Card from "./components/Card";

function App() {
  const [cardsList, setCardList] = React.useState<CardType[]>(
    shuffleArray(createBoard())
  );
  const [gameWon, setGameWon] = React.useState<boolean>(false);
  const [matchingParis, setMatchPairs] = React.useState(0);
  const [clickedCard, setClickedCard] = React.useState<undefined | CardType>(
    undefined
  );

  const handleCardClick = (currentClickedCard: CardType): void => {
    const newList = cardsList.map(item=>{
     return  item.id === currentClickedCard.id ? { ...item, flipped: true, clickable: false }:item
    })
    setCardList(newList);

    // card open to find a pair
    if(!clickedCard){
      setClickedCard(currentClickedCard);
      return ;
    }

    // if it's match
    if(clickedCard.matchingCardId === currentClickedCard.id){
      console.log("정답!!");
      const newList = cardsList.map(item=>{
        return item.id === clickedCard.id || item.id === currentClickedCard.id ? {...item,flipped:true,clickable:false}:item
      })
      setMatchPairs(prev=>prev+1);
      setCardList(newList);
      setClickedCard(undefined);
      return;
    }

    // if not Match
    setTimeout(() => {
      const newList = cardsList.map(item=>{
        return item.id === clickedCard.id || item.id === currentClickedCard.id ? {...item,flipped:false,clickable:true}:item
      })
      setCardList(newList);
    }, 1000);
    setClickedCard(undefined);

  };

  React.useEffect(()=>{
    if(matchingParis === cardsList.length/2){
      setGameWon(true);
    }
  },[matchingParis])

  React.useEffect(()=>{
    setGameWon(false);
    setMatchPairs(0);
    setCardList(shuffleArray(createBoard()));
    setClickedCard(undefined);
  },[gameWon])


  return (
    <div>
      <Grid>
        {cardsList.map((item) => {
          return <Card key={item.id} callBack={handleCardClick} card={item} />;
        })}
      </Grid>
    </div>
  );
}

export default App;
