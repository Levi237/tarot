//=> Create Deck to be used in Draw
import React, { useState, useEffect }   from 'react';

const Deck = ({deck}) => {


        const mapDeck = deck.map((card) => {
            const img = card.title;
            img.split(' ').join('_');
            img.toLowerCase();
            return (
                <div className="card">
                <h1>{card.title}</h1>
                <img src={`/cards/${img}.jpg`} alt={card.title}/>
                </div>
                );
        });

   
    return(
        <>
        {mapDeck}
        <button>shuffle deck</button>
        </>
    );
};
export default Deck;