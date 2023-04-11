import React, { useState }  from 'react';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';

import './dailycard.css';
 ////-- Generate random single card for DailyCard after clicking on DailyCard back image

const DailyCard = ({deck, layouts, viewCard}) => {
    const [hand, setHand] = useState({
        default: true,
        id: 0,
        suit: `major`,
        majorNum: `0`,
        title: `The Fool`,
        subtitle: `Power of Potential`,
        element: [],
        subelem: [],
        astro: [`Uranus`],
        subastro: [`Uranus rules the sign of Aquarius`],
        seph: `The Fool walks the first Tree of Life pathway, connecting Kether with Chokmah`,
        role: ``,
        keys: [`innocence`, `inexperience`, `seeking experience`, `openness`, `lacking guile`, `pure potential`, `travel`, `apprenticeship`, `a life altering journey`, `school of life`, `learning through experience`, `coming into adulthood`],
        revkeys: [`ignorance`, `willful blindness`, `misplaced trust`, `limited potential`, `inexperience`, `failure to learn lessons`, `resistance to change`, `choice or failure to heed warnings`, `canceled or delayed travel plans`],           
        desc: [],
        revdesc: [],
        major: [`The Fool represents each soul's journey through the world over multiple lifetimes. The Fool sets out to sacrifice his innocence through experience in search of wisdom. If The Fool can successfully navigate the 21 stations of the major arcana he will return to spirit as an enlightened sage or ascended master.`],
    });

    //-- need to add show-card className 
    const pickRandomCard = (e) => {
        e.preventDefault();
        if(hand.default){
            let getDeck = [...deck];
            let shuffledDeck = [];
            while (getDeck.length > 0) {
                let index = Math.floor(Math.random() * getDeck.length);
                let card = getDeck[index];
                shuffledDeck.push(card);
                getDeck.splice(index, 1);
            };
            setHand(shuffledDeck[0]);
            document.getElementById('dailycard_id').classList.add('show-card');
        }
    }

    const mapAstro = hand.astro.map((item, i) => {
        const length = hand.astro.length;
        
        // if there is only one, return item.
        if ( length === 1 ){
          return (<span key={i}>{item}</span>)
        }
        //==> add "," and "&" to multiple
        if ( length > 1 ) { 
          if ( i < length - 1 ){
            return (<span key={i}>{item}, </span>)
          }
          if ( i === length - 1 ){
            return (<span key={i}>{item} & </span>)
          }
          if ( i === length ){
            return (<span key={i}>{item}</span>)
          }
        }
  
      });
  
      const mapElement = hand.element.map((item, i) => {
        const length = hand.element.length;
        //==> add "|" to following items
  
          if ( i === 0 ){
            return (<span key={i} id={`${item}`}>{item}</span>);
          }
          if ( i > 0  ){
            return (<span key={i} id={`${item}`}> | {item}</span>);
          }
      });
  
      const mapSubElement = hand.subelem.map((item, i) => {
        const length = hand.subelem.length;
        
        // if there is only one, return item.
        if ( length === 1 ){
          return (<span key={i}>{item}</span>)
        }
        //==> add "," and "&" to multiple
        if ( length > 1 ) { 
          if ( i < length - 1 ){
            return (<span key={i}>{item}, </span>)
          }
          if ( i === length - 1 ){
            return (<span key={i}>{item} & </span>)
          }
          if ( i === length ){
            return (<span key={i}>{item}</span>)
          }
        }
      });
  
      const mapMajor = hand.major.map((item, i) => {
        const length = hand.major.length;
        
        // if there is only one, return item.
        if ( length === 1 ){
          return (<span key={i}>{item}</span>)
        }
        //==> add "," and "&" to multiple
        if ( length > 1 ) { 
          if ( i < length - 2 ){
            return (<span key={i}>{item}, </span>)
          }
          if ( i === length - 2 ){
            return (<span key={i}>{item} & </span>)
          }
          if ( i === length - 1 ){
            return (<span key={i}>{item}</span>)
          }
        }
      });
  
      const mapSubastro = hand.subastro.map((item, i) => {
        return (<span key={i}>{item}</span>);
      });
      const mapKeys = hand.keys.map((item, i) => {
        return (<li key={i}>{item}</li>);
      });
      const mapRevKeys = hand.revkeys.map((item, i) => {
        return (<li key={i}>{item}</li>);
      });
      const mapDesc = hand.desc.map((item, i) => {
        return (<p key={i}>{item}</p>);
      });
      const mapRevDesc = hand.revdesc.map((item, i) => {
        return (<p key={i}>{item}</p>);
      });
    
    return (
        <div className="dailycard-container grid two-column-grid forty-sixty">
            <div>
                <div id="dailycard_id" className="dailycard flip-card">
                    <div className="flip-card-inner" onClick={e => pickRandomCard(e)}>
                        <div className="flip-card-back">
                            <img src="./back.jpg" alt="back of card"/>
                        </div>
                        <div className="flip-card-face">
                            <img src={`/cards/${hand.title.toLowerCase().split(' ').join('_')}.jpg`} alt={`${hand.title}`}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div>
            <h3>Welcome to Tarofied Beta</h3>
                <p>This website is best viewed on Desktop</p>
                { hand.default ?
                <>Tap for your daily card</>
                :
                <div className="">
                    <p>This is your card of the day.  What message does this card hold for you?  How does it reflect your attitude or circumstance right now.</p>
                    <h2>{(hand.majorNum) && <span>{hand.majorNum}. </span>}{hand.title}</h2>
                    { hand.subtitle && <h3>{hand.subtitle}</h3> }
                    { hand.element.length > 0 && <p className="element">{mapElement}</p> }
                    {/* { hand.subelem.length > 0  && <p className="subelements">{mapSubElement}</p> } */}
                    {/* { hand.major.length > 0 && <p className="major-arcana">{mapMajor}</p> } */}
                    {/* { hand.seph.length > 0 && <p className="seph">{hand.seph}</p> } */}
                    { hand.astro.length > 0 && <p className="astro-p">Ruled by {mapAstro}</p>}
                    {/* { hand.subastro.length > 0 && <ul>{mapSubastro}</ul> } */}
                {/* <br/> */}
                    {/* <div>
                        <h4>Upright Keys</h4>
                        <ul>{mapKeys}</ul>
                    </div> */}
{/* 
                    <div>
                        <h4>Reverse Keys</h4>
                        <ul>{mapRevKeys}</ul>
                    </div> */}
                    {/* <div>
                    { hand.desc.length > 0 && <section>{mapDesc}</section> }
                    { hand.revdesc.length > 0 && <section>{mapRevDesc}</section> }
                </div> */}
                    <br/>

                </div>
                }
                </div>
            </div>
        </div>
    );
};

export default DailyCard;