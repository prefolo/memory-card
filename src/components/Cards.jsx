import React from 'react';

function Cards({indexes, clickHandler, isGameOver}) {
    const cssClass = isGameOver ? 'card-img-game-over' : 'card-img' ;

    let imgs = indexes.map((index) => <img className={cssClass} data-id={index} onClick={clickHandler} src={`https://picsum.photos/id/${index}/150/150`} />);

    return (
        <>
        {imgs}
       </>
    )
}

export default Cards



