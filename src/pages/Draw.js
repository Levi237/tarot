import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Draw.css';

import Deck from '../components/deck';
import Layout from '../components/spread/Layout';
import Dropdown from '../components/dropdown/Dropdown';

import HamMenu from '../components/nav/menu';
import {ReactComponent as ReactLogo} from '../components/svg/shuffle.svg';

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
            if(hideTopCard){ hideTopCard.style.display = 'none'; }
            
            displayDeck();

            setReshuffle(true);
            // document.getElementById('reading-window_id').classList.add('draw-height');
            // document.getElementById('reading-window_id').classList.remove('header-height');
        }, 500);    
    }, [deck]);

    const shuffleBtn = () => {
        shuffleDeck();
        toggleDisplay();
        //==> shuffle options (shuffle vs reshuffle) for timing of display
        

        if (reshuffle === true){
            //=> reshuffle click, delay until stack is complete
            setTimeout(() => {
                toggleDisplay();
            }, 2800);
        } else {     
            //=> first shuffle click     
            setTimeout(() => {
                toggleDisplay();
                setReshuffle(true);
            }, 0);
        };
    };

    const refreshDeck = () => {
        setNewDeck(deck);
        setHand([]);

        shuffleBtn();
        displayDeck();
        setReshuffle(true);
        toggleDisplay();

        document.getElementById('shuffle-btn').style.display = 'inline-block';
        // document.getElementById('reading-window_id').classList.remove('draw-height');
        // document.getElementById('reading-window_id').classList.add('draw-height');

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


    //==> Spread deck out first time for animation
    const displayDeck = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    if(getCard[i]){
                        getCard[i].classList.remove('stack-deck');
                        getCard[i].classList.add('splay-deck');
                    }
                }, i*6);
            }, 0);
        };
    };

    //==> Spread deck out
    const toggleDisplay = () => {
        let getCard = document.getElementsByClassName('dealt-card');
        for (let i = 0; i < getCard.length; i++) {
            setTimeout(() => {
                setTimeout(() => {
                    if(getCard[i]){
                        getCard[i].classList.toggle('stack-deck');
                        getCard[i].classList.toggle('splay-deck');
                    }
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

            // console.log(layout.cards, "layout, hand", hand.length);
            if (layout.cards - 1 === hand.length){
                document.getElementById('shuffle-btn').style.display = 'none';
            }
        };
    };

    //==> Back button to return user to previous page
	const navigate = useNavigate();
	const goBack = () => {
        navigate(-1);
	}

    //endable upright only
    const toggleUprightOnly = () => {
        document.getElementById('reverse-btn').classList.toggle('toggle-reverse-btn');
        if(document.querySelector('.spread-section')){
            document.querySelector('.spread-section').classList.toggle('show-reverse-onclick');
        }
        if(document.querySelector('.reverse')){
            document.querySelector('.reverse').classList.toggle('hide');
        }
        if(document.querySelector('.upright-hide')){
            document.querySelector('.upright-hide').classList.toggle('show');
        }
    }

    const handText = hand.map((card, key) => {
        // Scroll into function
        // When user clicks on new card for reading, 
        // the new information presents itself at the top of the window 
        // with the ability to scroll window intact
        const cardData = document.getElementsByClassName('card-reading-info');
        if(cardData.length > 0){
            Array.prototype.slice.call(cardData).map((e) => {
                if( key + 1 === cardData.length){
                    e.scrollIntoView({behavior: 'smooth'});
                }
            });
        }
        // print layout text
        const layoutOrder = layout.order.map((position, k) => {
            if (key === k){
                return (<div key={k}>
                <h4>{++k}.  {position.title}</h4>
                <p>{position.description}</p>
                <p>{position.prompt}</p>
                </div>);
            }
        });
        const mapKeys = card.keys.map((item, i) => {
            return (<li key={i}>{item}</li>);
        });
        const mapRevKeys = card.revkeys.map((item, i) => {
            return (<li key={i}>{item}</li>);
        });

        return (<>
            <div className="" key={key} >
                <h5>Card Position: {key + 1}</h5>
                <h1>{(card.majorNum) && <span>{card.majorNum}. </span>}{card.title}</h1>
                {card.subtitle && <h3>{card.subtitle}</h3>}
                <div className={(card.rotation === 2 || card.rotation === 0) ? 'upright' : 'upright upright-hide'}>
                    <h4>Upright Keys</h4>
                    <ul>{mapKeys}</ul>
                </div>

                <div className={(card.rotation === 1) ? 'reverse' : 'reverse-hide'}>
                    <h4>Reverse Keys</h4>
                    <ul>{mapRevKeys}</ul>
                </div>

                <br/>
                {layoutOrder}
                <br/>
                
                <div className="card-reading-info"></div>
            </div>
        </> );
    });

    return (
        <div className="draw-display">
            {/* <header>
                <section>
                { layout.id
                ? <h4>{layout.name}</h4>
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
                    <button className="btn" id="shuffle-btn" onClick={shuffleBtn}>Shuffle Deck&nbsp;<ReactLogo/></button>
                </section>
                <section>
                    <HamMenu>
                        <button id="reverse-btn" onClick={toggleUprightOnly} className="toggle-reverse-btn invisible-btn---- small btn">Upright Cards</button>
                        <button onClick={refreshDeck} className="invisible-btn---- small btn">REFRESH</button>
                        <button onClick={goBack} className="invisible-btn---- small btn">HOME</button>
                    </HamMenu>
                </section>
            </header> */}
            <div>
            <button className="btn" id="shuffle-btn" onClick={shuffleBtn}>Shuffle Deck&nbsp;<ReactLogo/></button>

                <button id="reverse-btn" onClick={toggleUprightOnly} className="toggle-reverse-btn invisible-btn---- small btn">Upright Cards</button>
                <button onClick={refreshDeck} className="invisible-btn---- small btn">REFRESH</button>
            </div>
            <Deck deck={newDeck} shuffleBtn={shuffleBtn} selectCard={selectCard} styleId='deal-deck'/>
            <div id="reading-window_id" className='reading-window'>
                <section className="layout-section">
                    <Layout hand={hand} layout={layout} viewCard={viewCard}/>
                </section>
                {/* <section className="text-section">
                    <div>
                        {handText}
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default DrawPage;