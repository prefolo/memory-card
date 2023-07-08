
import './App.css'
import React, { useState } from 'react';

import Cards from "./components/Cards";

function App() {
  const [indexes, setIndexes] = useState([63,64,152,175,239,300,310,320,330,340,350,360])
  const [selectedIndexes, setSelectedIndexes] = useState([])
  const [bestScore, setBestScore] = useState(0)


  function handleRandomIndexes(e) {
    const newOrderedArr= [...indexes].sort( () => .5 - Math.random() );
    setIndexes(newOrderedArr);

    const clickedIndex = e.target.dataset['id']*1;
    

    if(selectedIndexes.includes(clickedIndex)) {
      gameOver();
      return;
    }

    setSelectedIndexes([...selectedIndexes, clickedIndex])
  }

  function gameOver(params) {
    if(bestScore < selectedIndexes.length)
      setBestScore(selectedIndexes.length)

    setSelectedIndexes([])

    alert('You clicked previously selected card. Game over.')
  }

  return (
    <>
    <div id="score">
      {'Score : '+selectedIndexes.length}
    </div>
    <div id="best-score">
      {'Best Score : '+bestScore}
    </div>
    <div id="cards-container">
          <Cards indexes={indexes} clickHandler={handleRandomIndexes}/>
  </div>
  </>
  )
}

export default App
