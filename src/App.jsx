
import './App.css'
import React, { useState } from 'react';

import Cards from "./components/Cards";

function App() {
  const [indexes, setIndexes] = useState([63,64,152,175,239,300,310,320,330,340,350,360])

  function handleRandomIndexes() {
    const newOrderedArr= [indexes].sort( () => .5 - Math.random() );
    setIndexes(newOrderedArr)
  }

  return (
    <div id="cards-container">
          <Cards indexes={indexes} clickHandler={handleRandomIndexes}/>

  </div>
  )
}

export default App
