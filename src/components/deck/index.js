//=> Create Deck to be used in Draw
import React, { useState, useEffect }   from 'react';

import './card.css';

const Deck = ({deck}) => {


        const mapDeck = deck.map((card, key) => {
            const img = card.title.toLowerCase().split(' ').join('_');
            return (
                <div className="card" key={key}>
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