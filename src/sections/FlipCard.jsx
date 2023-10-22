import React, { useState }  from 'react';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';

import './DailyCard.css';
import './FlipCard.css';
 ////-- Generate random single card for DailyCard after clicking on DailyCard back image

const FlipCard = ({card, pickRandomCard}) => {
   
    
    return (<div className="dailycard wrapper">

        <div className="container">
            <div>
                <div id="dailycard_id" className="dailycard flip-card">
                    <div className="flip-card-inner" onClick={e => pickRandomCard(e)}>
                        <div className="flip-card-back">
                            <img src="./card-back.png" alt="back of card"/>
                        </div>
                        <div className="flip-card-face">
                            <img src={`/cards/${card.title.toLowerCase().split(' ').join('_')}.jpg`} alt={`${card.title}`}/>
                        </div>
                    </div>
                </div>
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

export default FlipCard;