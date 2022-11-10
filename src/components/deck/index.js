//=> Create Deck to be used in Draw
import React, { useState, useEffect }   from 'react';

import './card.css';

const Deck = ({deck}) => {

const doThis = (e, title) => {
    console.log(title, "clicked card 'doThis'", e.currentTarget);
}
        const mapDeck = deck.map((card, key) => {
            const img = card.title.toLowerCase().split(' ').join('_');
            return (
                <div className="card" key={key} onClick={(e) => {doThis(e, card.title);}}>
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