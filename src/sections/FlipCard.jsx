import React from 'react';

import './FlipCard.css';

////-- Flipable Daily Card
const FlipCard = ({card, pickRandomCard, viewCard}) => {

    return (
        <div id="dailycard_id" className="dailycard flip-card">
            <div className="flip-card-inner" onClick={e => pickRandomCard(e)}>
                <div className="flip-card-back">
                    <img src="./card-back.png" alt="back of card"/>
                </div>
                <div className="flip-card-face" onClick={(e) => viewCard(e, card)}>
                    <img src={`/cards/${card.title.toLowerCase().split(' ').join('_')}.jpg`} alt={`${card.title}`}/>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;