import React, { useEffect, useState } from 'react';
import Deck from '../components/deck'


const DrawPage = ({deck}) => {
    
    //==> pass original deck and make new state of deal
    const [newDeck, setNewDeck] = useState([]);
    //==> signal difference in splay speed
    const [reshuffle, setReshuffle] = useState(false);

    const shuffleDeck = () => {
        console.log("click shuffle", newDeck);
        presentDeck();
        stackDeck();
        //==> shuffle options (shuffle vs reshuffle)
        if (reshuffle){
            //=> reshuffle click
            setTimeout(() => {
                splayDeck();
            }, 2800);
        } else {     
            //=> first shuffle click     
            setTimeout(() => {
                splayDeck();
                setReshuffle(true);
                const hideTopCard = document.getElementById('top-back-card');
                if(hideTopCard){hideTopCard.style.display = 'none';}
            }, 0);
        }

    }
    const presentDeck = () => {
        //==> shuffle deck and update newDeck state
        let getDeck = [...deck];
        let shuffledDeck = [];
        while (getDeck.length > 0) {
            let index = Math.floor(Math.random() * getDeck.length);
            let card = getDeck[index];
            shuffledDeck.push(card);
            getDeck.splice(index, 1);
        };
        setNewDeck(shuffledDeck);
    }

    const stackDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.add('stack-deck');
                    getCard[i].classList.remove('splay-deck');
                }, i*6);
            }, 0);
        };
    };

    const splayDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.remove('stack-deck');
                    getCard[i].classList.add('splay-deck');
                }, i*6);
            }, 0);
        };
    };


    return (
        <div>
            Draw Page Test
            <br/>
            <Deck deck={newDeck} shuffleDeck={shuffleDeck}/>
            <button onClick={shuffleDeck}>shuffle deck</button>
        </div>
    )
}



export default DrawPage;