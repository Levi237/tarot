import React, { useState, useEffect } from 'react';
import { Link }                       from 'react-router-dom';
import * as routes                    from '../constants/routes';

import './DailyCard.css';
import './FlipCard.css';

import FlipCard                       from './FlipCard';

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
      };
  };

  return (
    <>
    <div className="dailycard wrapper">
      <img className="background-img" src="./backgrounds/watercolor-background.png" alt="waterpaint wallpaper"/>
      <div className="container">

        <div className="grid">
          <section className={(card.default && deck.length > 1) && "live"}>
            <FlipCard card={card} pickRandomCard={pickRandomCard}/>
          </section>

          <section className="desktop-only desktop-content">
            <div>
                <h2>Tarot To Me</h2>
                <h4 className="subtitle">"A question never asked is never answered."</h4>
                <p className="type">We come to these places in search of answers we already have.  It's just a matter of opening yourself up to seeing the signs right in front of you.</p>
                <p className="type">Explore our variety of spreads and have fun.</p>
                <br/>
                <Link to={routes.DRAW}><h4 className="cta">Start Reading ➛</h4></Link>
              </div>
          </section>
        </div>
        
      </div>
    </div>

    <div className="mobile-only dailycard-mobile-content dark-pallet wrapper">
      <div>
        <h2>Tarot To Me</h2>
        <h4 className="subtitle">"A question never asked is never answered."</h4>
        <p className="type">We come to these places in search of answers we already have.  It's just a matter of opening yourself up to seeing the signs right in front of you.</p>
        <p className="type">Explore our variety of spreads and have fun.</p>
        <br/>
        <Link to={routes.DRAW}><h4 className="cta">Start Reading </h4></Link>
      </div>
    </div>
    </>
  );
};

export default DailyCard;