import React, { useEffect, useState } from 'react';
import Deck from '../components/deck'

const DrawPage = ({deck}) => {

    const [deal, setDeal] = useState([])
    useEffect(() => {
        setDeal(deck);
    }, []);

    const shuffleDeck = () => {
        console.log("click shuffle");
        let newDeck = [...deck];
        let shuffledDeck = [];
        while (newDeck.length > 0) {
            let index = Math.floor(Math.random() * newDeck.length);
            let card = newDeck[index];
            shuffledDeck.push(card);
            newDeck.splice(index, 1);
        };
        setDeal(shuffledDeck);
        displayDeck();
    }

    const displayDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.remove('stack-deck');
                    getCard[i].classList.add('splay-deck');
                }, i*20);
            }, 0);
        };
    }

    const animateDeck = () => {   
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.add('splay-deck');
                }, i*20);
            }, 0);
        };
    };

    return (
        <>
Draw Page Test
<br/>
<Deck deck={deal} shuffleDeck={shuffleDeck}/>
        </>
    )
}



export default DrawPage;