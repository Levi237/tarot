import React, { useState, useEffect }  from 'react';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';

import './DailyCard.css';
import './FlipCard.css';

import FlipCard from './FlipCard';
 ////-- Generate random single card for DailyCard after clicking on DailyCard back image

const DailyCard = ({deck, viewCard}) => {
    const [card, setCard] = useState({
        default: true,
        id: 0,
        suit: ``,
        majorNum: ``,
        title: ``,
        subtitle: ``,
        element: [],
        subelem: [],
        astro: [],
        subastro: [],
        seph: ``,
        role: ``,
        keys: [],
        revkeys: [],           
        desc: [],
        revdesc: [],
        major: [],
    });

    //-- need to add show-card className 
    const pickRandomCard = (e) => {
        e.preventDefault();
        if(card.default && deck.length > 1){
            let getDeck = [...deck];
            let shuffledDeck = [];
            while (getDeck.length > 0) {
                let index = Math.floor(Math.random() * getDeck.length);
                let card = getDeck[index];
                shuffledDeck.push(card);
                getDeck.splice(index, 1);
            };
            setCard(shuffledDeck[0]);
            document.getElementById('dailycard_id').classList.add('show-card');
        }
    }

    return (<div className="dailycard wrapper">

        <div className="container">
            <div>
                <FlipCard card={card} pickRandomCard={pickRandomCard}/>
              </div>
            <div>
              <div>
                  <h1>Tarot To Me</h1>
                  <h3 className="subtitle">"A question never asked is never answered."</h3>
                  <p>We come to these places in search of answers we already have.  It's just a matter of opening yourself up to seeing the signs right in front of you.</p>
                  <p>Explore our variety of spreads and have fun.</p>
                </div>
            </div>
        </div>
      </div>);
};

export default DailyCard;