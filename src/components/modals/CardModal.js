//==> Create Card Modal to display all card information.  
//========> Allow scroll to view all information

import React from 'react';

import './modal.css'
const CardModal = ({card, closeCardModal}) => {

    const img = card.title.toLowerCase().split(' ').join('_');

    const mapAstro = card.astro.map((item, i) => {
      const length = card.astro.length;
      
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

    const mapElement = card.element.map((item, i) => {
      const length = card.element.length;
      
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

    const mapSubElement = card.subelem.map((item, i) => {
      const length = card.subelem.length;
      
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
    const mapMajor = card.major.map((item, i) => {
      const length = card.major.length;
      
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

    const mapSubastro = card.subastro.map((item, i) => {
      return (<span key={i}>{item}</span>)
    });
    const mapKeys = card.keys.map((item, i) => {
      return (<li key={i}>{item}</li>)
    });
    const mapRevKeys = card.revkeys.map((item, i) => {
      return (<li key={i}>{item}</li>)
    });
    const mapDesc = card.desc.map((item, i) => {
      return (<p key={i}>{item}</p>)
    });
    const mapRevDesc = card.revdesc.map((item, i) => {
      return (<p key={i}>{item}</p>)
    });
    return(
      <div className="cardmodal modal">
        <div className="close-modal-box">
          <button className="close-modal-btn" onClick={closeCardModal}>X</button>
        </div>
        <div className="grid two-column-grid forty-sixty">
          <section>
            <img style={{transform: `rotate(${180*card.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${card.title}`}/>
          </section>
          <section>
                
                { card.title.length > 0 && <h1>{card.title}</h1> }
                { card.subtitle.length > 0 && <h3>{card.subtitle}</h3> }
                { card.element.length > 0 && <p>{mapElement}</p> }
                { card.subelem.length > 0  && <p>{mapSubElement}</p> }
                { card.major.length > 0 && <p>{mapMajor}</p> }
                { card.astro.length > 0 && <p className="astro-p">Ruled by {mapAstro}</p>}
                { card.subastro.length > 0 && <ul>{mapSubastro}</ul> }
              <br/>
              { card.keys.length > 0 &&
                <>
                  <h3>Key Notes Upright</h3>
                  <ul className="two-col-ul">{mapKeys}</ul>
                </>
              }
              <br/>
              { card.revkeys.length > 0 &&
                <>
                  <h3>Key Notes Upside Down</h3>
                  <ul className="two-col-ul">{mapRevKeys}</ul>
                </>
              }
              { card.desc.length > 0 && <section>{mapDesc}</section> }
              { card.revdesc.length > 0 && <section>{mapRevDesc}</section> }
          </section>
        </div>
      </div>  
    );
};

export default CardModal;