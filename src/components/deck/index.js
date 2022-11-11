//=> Create Deck to be used in Draw 23/44
import React, { useState, useEffect }   from 'react';

import './card.css';
import './deck.css';

const Deck = ({deck, shuffleDeck}) => {

    ////-- pick card from shuffled deck, add to hand.
    const selectCard = (e) => {
        // const { deck, hand, selectSpread, shuffle } = this.state;
        // const t = e.currentTarget.id;
        // ////-- increase chances of card being upright
        // // const random = Math.floor(Math.random(1 - 0) * 2);
        // const random = Math.floor(Math.random(1 - 0) * 3);
        // if (hand.length < selectSpread.cards) {
        //     document.getElementById(t).style.display = "none";
        //     deck.filter(d => {
        //         if ( t === d.id ) {
        //             let newD = d;
        //             newD.rotation = random;
        //             newD.orderNum = hand.length;
        //             this.setState({
        //                 hand: [...hand, newD]
        //             });
        //         };
        //     });
        // };
        // while (shuffle.length > 0 && hand.length === selectSpread.cards - 1) {
        //     shuffle.pop();
        // };
        // if (hand.length === selectSpread.cards - 1) {
        //     document.getElementById("shuffle-nav").style.display = "none";
        //     document.getElementById("deck-display").style.marginLeft = "-120%";
        //     setTimeout(() => {
        //         document.getElementById("deck-display").style.marginBottom = "-40%"; 
        //     }, 1000);
        // };
        // };
        // while (shuffle.length > 0 && hand.length === selectSpread.cards - 1) {
        //     shuffle.pop();
        // };
        // if (hand.length === selectSpread.cards - 1) {
        //     document.getElementById("shuffle-nav").style.display = "none";
        //     document.getElementById("deckDisplay").style.marginLeft = "-120%";
        //     setTimeout(() => {
        //         document.getElementById("deckDisplay").style.marginBottom = "-40%"; 
        //     }, 1000);
        // };
    };

    const mapDeck = deck.map((card, key) => {
        const img = card.title.toLowerCase().split(' ').join('_');
        return (
            <div id={card.id} className="card dealt-card stack-deck" key={key} onClick={(e) => {selectCard(e);}}>
                <img src={`/cards/${img}.jpg`} alt={card.title}/>
            </div>
        );
    });

    return(
        <div className="deck-container">
            <div className="deck">
                <div className="cards">
                    {mapDeck}
                </div>
            </div>
        <button onClick={shuffleDeck}>shuffle deck</button>
        </div>
    );
};
export default Deck;