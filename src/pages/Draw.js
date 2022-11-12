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
        console.log("selectCard => ", e);
        // const { deck, hand, selectSpread, shuffle } = this.state;
        const _id = e.currentTarget.id;
        // ////-- increase chances of card being upright
        // // const upDownChance = Math.floor(Math.random(1 - 0) * 2);
        const upDownChance = Math.floor(Math.random(1 - 0) * 3);
        if (hand.length < spreadCount) {
            console.log("if true", hand.length, "deck", deck)
            document.getElementById(_id).style.display = "none";
            deck.filter(d => {
                if ( _id == d.id ) {
                    console.log("id selected", d.id, _id)
                    let newD = d;
                    newD.rotation = upDownChance;
                    newD.orderNum = hand.length;
                    // this.setState({
                    //     hand: [...hand, newD]
                    // });
                    setHand([...hand, newD])
                };
            });
        };
        while (newDeck.length > 0 && hand.length === spreadCount - 1) {
            newDeck.pop();
        };
        // if (hand.length === spreadCount - 1) {
        //     document.getElementById("shuffle-nav").style.display = "none";
        //     document.getElementById("deck-display").style.marginLeft = "-120%";
        //     setTimeout(() => {
        //         document.getElementById("deck-display").style.marginBottom = "-40%"; 
        //     }, 1000);
        // };
        // };
        // while (shuffle.length > 0 && hand.length === spreadCount - 1) {
        //     shuffle.pop();
        // };
        // if (hand.length === spreadCount - 1) {
        //     document.getElementById("shuffle-nav").style.display = "none";
        //     document.getElementById("deckDisplay").style.marginLeft = "-120%";
        //     setTimeout(() => {
        //         document.getElementById("deckDisplay").style.marginBottom = "-40%"; 
        //     }, 1000);
        // };
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