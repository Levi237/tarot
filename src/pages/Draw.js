import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Deck from '../components/deck';
import Layout from '../components/spread/Layout';
import Dropdown from '../components/dropdown/Dropdown';
import './draw.css'

const DrawPage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    //==> pass original deck and make new state of deal
    const [newDeck, setNewDeck] = useState([]);
    //==> create hand from cards drawn
    const [hand, setHand] = useState([]);
    //==> signal difference in splay speed (shuffle vs reshuffle)
    const [reshuffle, setReshuffle] = useState(false);
    //==> chose layout

    useEffect(() => {
        //==> spread out deck when page loads
        shuffleDeck();
        setTimeout(() => {
            const hideTopCard = document.getElementById('top-back-card');
            if(hideTopCard){hideTopCard.style.display = 'none';}
            splayDeck();
            setReshuffle(true);
        }, 500);    
    }, [deck]);

    const shuffleBtn = () => {
        shuffleDeck();
        stackDeck();
        //==> shuffle options (shuffle vs reshuffle)
        

        if (reshuffle === true){
            //=> reshuffle click
            setTimeout(() => {
                splayDeck();
            }, 2800);
        } else {     
            //=> first shuffle click     
            setTimeout(() => {
                splayDeck();
                setReshuffle(true);
            }, 0);
        };
    };

    const refreshDeck = () => {
        setNewDeck(deck);
        setHand([]);
        shuffleDeck();
        stackDeck();
        setTimeout(() => {
            splayDeck();
        }, 2800);
        document.getElementById('shuffle-btn').style.display = 'inline-block';
        document.getElementById('deal-deck').style.maxHeight = '600px';
        document.getElementById('deal-deck').style.overflow = 'hidden';
        // need to refresh dropdown
    }
    const shuffleDeck = () => {
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
    };

    const stackDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    //==> Check to see if card was drawn during stack
                    if(getCard[i]){
                        getCard[i].classList.add('stack-deck');
                        getCard[i].classList.remove('splay-deck');
                    }
                    }, i*6);
            }, 0);
        };
    };

    //==> Spread deck out
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

    //==> pick card from shuffled deck, add to hand.
    const selectCard = (e) => {
        const _id = e.currentTarget.id;
        //==> increase chances of card being upright
        const upDownChance = Math.floor(Math.random(1 - 0) * 3);
        if (hand.length < layout.cards) {
            document.getElementById(_id).style.display = "none";
            newDeck.filter(card => {
                if ( _id == card.id ) {
                    let drawnCard = card;
                    drawnCard.rotation = upDownChance;
                    drawnCard.orderNum = hand.length;
                    setHand([...hand, drawnCard]);
                };
            });
            newDeck.pop();

            console.log(layout.cards, "layout, hand", hand.length);
            if (layout.cards - 1 === hand.length){
                document.getElementById('shuffle-btn').style.display = 'none';
                setTimeout(() => {
                    
                    setReshuffle(false);
                    stackDeck();
                    // console.log(layout.cards, "layout, hand", hand.length);
                    document.getElementById('deal-deck').style.maxHeight = '0px';
                    document.getElementById('deal-deck').style.overflow = 'hidden';
                }, 1000);
            }
            // if layout length equals drawn cards length, setReshuffle(false)

        };
    };

    //==> Back button to return user to previous page
	const navigate = useNavigate();
	const goBack = () => {
        navigate(-1);
	}

    const showReverse = () => {
        console.log("make a reverse toggle for the spreads");
    }
    return (
        <div>
            <header>
            <section>
            {layout.id
            ? <h3>{layout.name}</h3>
            : <Dropdown 
                list={layouts} 
                defaultText={"Choose a Spread"}
                defaultValue={""}
                selectedData={layout}
                selectFunction={selectLayout} 
                defaultOption={true}
                />
            }
            </section>
            <section>
                <button id="shuffle-btn" onClick={shuffleBtn}>shuffle deck</button>
            </section>
            <section>
            <button onClick={showReverse} className="invisible-btn">UPRIGHT CARDS ONLY</button>
                <button onClick={refreshDeck} className="invisible-btn">REFRESH</button>
                <button onClick={goBack} className="invisible-btn">X</button>
            </section>
            </header>
            <Deck deck={newDeck} shuffleBtn={shuffleBtn} selectCard={selectCard} styleId='deal-deck'/>
            <Layout hand={hand} layout={layout} viewCard={viewCard}/>
        </div>
    );
};

export default DrawPage;