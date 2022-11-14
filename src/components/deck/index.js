//=> Create Deck to be used in Draw 23/44
import React, { useState, useEffect }   from 'react';

import './card.css';
import './deck.css';

const Deck = ({deck, selectCard}) => {

    const mapDeck = deck.map((card, key) => {
        const img = card.title.toLowerCase().split(' ').join('_');
        return (
            <div id={card.id} className="card dealt-card stack-deck" key={key} onClick={(e) => {selectCard(e);}}>
            <img src='/back.jpg' alt="Star Card Back" />
            <img src={`/cards/${img}.jpg`} alt={card.title}/>
        </div>
    );
});
    return(
        <div className="deck-container">
            <div className="deck">
                <div className="cards">
                    {mapDeck}
                    <img id="top-back-card" className="card" src='/back.jpg' alt="Star Card Back" onClick={(e) => {selectCard(e)}}/>
                </div>
            </div>

        </div>
    );
};
export default Deck;