import './App.css'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from "./components/Cards";

function App() {
  const [indexes, setIndexes] = useState([63,888,870,175,525,979,292,312,674,429,629,718])
  const [selectedIndexes, setSelectedIndexes] = useState([])
  const [bestScore, setBestScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)


  const notifyGameOver = () => toast.error("Ops! You clicked the same image two times. Your score is : "+selectedIndexes.length, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: null,
    theme: "light",
    onOpen: onToastOpenCb,
      onClose: onToastCloseCb
    });

    function onToastOpenCb() {
      document.body.style.backgroundColor='#eee'
      setIsGameOver(true)
    }

    function onToastCloseCb() {
      document.body.style.backgroundColor='white'
      setIsGameOver(false)
    }

  function handleSelectImg(e) {
    console.log({isGameOver})
    if( isGameOver ) return;

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

    notifyGameOver();
  }

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div id="header">
      <p>Memory Card</p>
      <div id="scores-container">
      <div id="score">
      {'Score : '+selectedIndexes.length}
    </div>
    <div id="best-score">
      {'Best Score : '+bestScore}
    </div>
      </div>
  </div>
  <div id="instruction">
  Get points by clicking on an image but don't click on any more than once!
  </div>
  <div id="content">
  <div id="cards-container">
          <Cards indexes={indexes} clickHandler={handleSelectImg} isGameOver={isGameOver} />
  </div>     
  </div>
  <div id="footer">Copyright © 2023 prefolo</div>
  </>
  )
}

export default App
