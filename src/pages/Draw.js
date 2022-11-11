import React, { useEffect, useState } from 'react';
import Deck from '../components/deck'

//==> pass original deck and make new state of deal

const DrawPage = ({deck}) => {

    const [newDeck, setNewDeck] = useState([]);
    const [reshuffle, setReshuffle] = useState(false);
    useEffect(() => {
        // presentDeck();
    }, []);

    const shuffleDeck = () => {
        console.log("click shuffle", newDeck);
        presentDeck();
        stackDeck();
        //==> reshuffle
        if (reshuffle){
            //=> reshuffle
            setTimeout(() => {
                splayDeck();
            }, 2800);
        } else {     
            //=> first shuffle       
            setTimeout(() => {
                splayDeck();
                setReshuffle(true);
            }, 0);
        }

    }
    const presentDeck = () => {
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

    // const animateDeck = () => {   
    //     let getCard = document.getElementsByClassName('dealt-card');
    //     for (let i = 0; i < getCard.length; i++) {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                 getCard[i].classList.add('splay-deck');
    //             }, i*20);
    //         }, 0);
    //     };
    // };

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