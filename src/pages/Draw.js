import React, { useEffect, useState } from 'react';
import Deck from '../components/deck'


const DrawPage = ({deck}) => {
    
    //==> pass original deck and make new state of deal
    const [newDeck, setNewDeck] = useState([]);
    //==> create hand from cards drawn
    const [hand, setHand] = useState([]);
    const [spreadCount, setSpreadCount] = useState(3);
    //==> signal difference in splay speed (shuffle vs reshuffle)
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

    ////-- pick card from shuffled deck, add to hand.
    const selectCard = (e) => {
        const _id = e.currentTarget.id;
        // ////-- increase chances of card being upright
        const upDownChance = Math.floor(Math.random(1 - 0) * 3);
        if (hand.length < spreadCount) {
            console.log("if true", hand.length, "deck", newDeck)
            document.getElementById(_id).style.display = "none";
            newDeck.filter(card => {
                if ( _id == card.id ) {
                    console.log("id selected", card.id, _id)
                    let drawnCard = card;
                    drawnCard.rotation = upDownChance;
                    drawnCard.orderNum = hand.length;
                        setHand([...hand, drawnCard])
                    };
                });
                newDeck.pop();
        };
    };

    return (
        <div>
            Draw Page Test
            <br/>
            <Deck deck={newDeck} shuffleDeck={shuffleDeck} selectCard={selectCard}/>
            <button onClick={shuffleDeck}>shuffle deck</button>
        </div>
    )
}



export default DrawPage;