import React, { useState } from "react";
// Setup
import { createBoard } from "./utils/Setup";
import { shuffleArray } from "./utils/utils";

// Type
import { CardType } from "./utils/Setup";
import { Grid } from "./styles/App.styles";

function App() {
  const [cardsList, setCardList] = React.useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon,setGameWon] =React.useState<boolean>(false);
  const [matchingParis,setMatchPairs] =React.useState(0);
  const [clickedCard,setClickedCard] =React.useState<undefined | CardType>(undefined);


  return <div>
    <Grid>
      {cardsList.map(item=>{
        return <p>{item.id}</p>
      })}
    </Grid>
  </div>;
}

export default App;
