import React from 'react';

function Cards({indexes, clickHandler}) {
    let imgs = indexes.map((index) => <img onClick={clickHandler} src={`https://picsum.photos/id/${index}/150/150`} />);

    return (
        <>
        {imgs}
       </>
    )
}

export default Cards



