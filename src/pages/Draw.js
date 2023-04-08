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
            
            displayDeck();

            setReshuffle(true);
            document.getElementById('reading-window_id').classList.add('draw-height');
            document.getElementById('reading-window_id').classList.remove('header-height');
        }, 500);    
    }, [deck]);

    const shuffleBtn = () => {
        shuffleDeck();
        
        // stackDeck();
        toggleDisplay();
        //==> shuffle options (shuffle vs reshuffle) for timing of display
        

        if (reshuffle === true){
            //=> reshuffle click, delay until stack is complete
            setTimeout(() => {
                
                // displayDeck();
                toggleDisplay();

            }, 2800);
        } else {     
            //=> first shuffle click     
            setTimeout(() => {
                
                // displayDeck();
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

        //condense below code to shuffleBtn()
        // shuffleDeck();
        // stackDeck();
        // setTimeout(() => {
        // displayDeck();
        // }, 2800);
        toggleDisplay();

        document.getElementById('shuffle-btn').style.display = 'inline-block';
        document.getElementById('deal-deck').style.maxHeight = '600px';
        document.getElementById('deal-deck').style.overflow = 'hidden';
        // document.getElementById('reading-window_id').classList ='calc(100dvh - var(--height-desktop-draw))';
        document.getElementById('reading-window_id').classList.remove('draw-height');
        document.getElementById('reading-window_id').classList.add('draw-height');

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

    // const stackDeck = () => {
    //     let getCard = document.getElementsByClassName('dealt-card');
    //     for (let i = 0; i < getCard.length; i++) {
    //         setTimeout(() => {
    //             setTimeout(() => {
    //                 //==> Check to see if card was drawn during stack
    //                 if(getCard[i]){
    //                     getCard[i].classList.add('stack-deck');
    //                     getCard[i].classList.remove('splay-deck');
    //                 }
    //                 }, i*6);
    //         }, 0);
    //     };
    // };

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
                setTimeout(() => {
                    
                    // setReshuffle(false);
                    
                    // stackDeck();
                    toggleDisplay();
                    // console.log(layout.cards, "layout, hand", hand.length);
                    document.getElementById('deal-deck').style.maxHeight = '0px';
                    document.getElementById('reading-window_id').classList.remove('draw-height');
                    document.getElementById('reading-window_id').classList.add('header-height');

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

    //endable upright only
    const toggleUprightOnly = () => {
        document.querySelector('.spread-section').classList.toggle('show-reverse-onclick');
        document.getElementById('reverse-btn').classList.toggle('toggle-reverse-btn');
        document.querySelector('.reverse').classList.toggle('hide');
        document.querySelector('.upright-hide').classList.toggle('show');
    }

    const handText = hand.map((card, key) => {
    // Scroll into function
    // When user clicks on new card for reading, 
    // the new information presents itself at the top of the window 
    // with the ability to scroll window intact
    const cardData = document.getElementsByClassName('card-reading-info');
        if(cardData.length > 0){
            Array.prototype.slice.call(cardData).map((e, k) => {
                if( key + 1 === cardData.length){
                    console.log(cardData, "card data", cardData.length);
                    e.scrollIntoView({behavior: 'smooth'});
                }
            });
        }
        const layoutOrder = layout.order.map((position, k) => {
            if (key === k){
                return (<>
                <h4>{++k}.  {position.title}</h4>
                <p>{position.description}</p>
                <p>{position.prompt}</p>
                </>);
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
                {/* {(card.suit === 'swords' || card.suit === 'cups' || card.suit === 'pentacles' || card.suit === 'wands') ? <p className="suit-text">Suit: <span>{card.suit}</span></p> : <p className="suit-text"><span>{card.suit} Arcana</span></p>} */}
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
            </>
        );
    });
    
    return (
        <div className="draw-display">
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
                <button id="reverse-btn" onClick={toggleUprightOnly} className="toggle-reverse-btn invisible-btn---- small btn">Upright All Cards</button>
                <button onClick={refreshDeck} className="invisible-btn---- small btn">REFRESH</button>
                <button onClick={goBack} className="invisible-btn---- small btn">BACK</button>
            </section>
            </header>
            <Deck deck={newDeck} shuffleBtn={shuffleBtn} selectCard={selectCard} styleId='deal-deck'/>
            <div id="reading-window_id" className='reading-window'>
                <section className="layout-section">
                    <Layout hand={hand} layout={layout} viewCard={viewCard}/>
                </section>
                <section className="text-section">
                    <div>
                        {handText}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DrawPage;