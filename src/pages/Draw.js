import React, { useEffect, useState } from 'react';
import Deck from '../components/deck'

//==> pass original deck and make new state of deal

const DrawPage = ({deck}) => {

    const [deal, setDeal] = useState([])
    useEffect(() => {
        // presentDeck();
    }, []);

    const shuffleDeck = () => {
        console.log("click shuffle", deal);
        presentDeck();
        stackDeck();
        //==> reshuffle
        if (deal.length = 0){
            setTimeout(() => {
                splayDeck();
                console.log("deal greater than 0", deal)
            }, 0);
        } else {            
            //=> shuffle
            setTimeout(() => {
                splayDeck();
            }, 5000);
        }

    }
    const presentDeck = () => {
        let newDeck = [...deck];
        let shuffledDeck = [];
        while (newDeck.length > 0) {
            let index = Math.floor(Math.random() * newDeck.length);
            let card = newDeck[index];
            shuffledDeck.push(card);
            newDeck.splice(index, 1);
        };
        setDeal(shuffledDeck);
    }

    const stackDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    getCard[i].classList.add('stack-deck');
                    getCard[i].classList.remove('splay-deck');
                }, i*20);
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
                }, i*20);
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
        <>
Draw Page Test
<br/>
{/* { (deal === [])
? <Deck deck={deal} shuffleDeck={shuffleDeck}/>
: <Deck deck={deck} shuffleDeck={shuffleDeck}/>
} */}
<Deck deck={(deal !== []) ? deal : deck} shuffleDeck={shuffleDeck}/>
<Deck deck={deal} shuffleDeck={shuffleDeck}/>
<Deck deck={deck} shuffleDeck={shuffleDeck}/>
<button onClick={shuffleDeck}>shuffle deck</button>
        </>
    )
}



export default DrawPage;