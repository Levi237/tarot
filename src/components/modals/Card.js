//==> Create Card Modal to display all card information.  
//========> Allow scroll to view all information

import React from 'react';

import './modal.css'
const CardModal = ({card, closeCardModal}) => {
    const img = card.title.toLowerCase().split(' ').join('_');

    const mapAstro = card.astro.map((item, k) => {
      return (<span key={k}>{item}</span>)
    });
    const mapSubastro = card.subastro.map((item, k) => {
      return (<span key={k}>{item}</span>)
    });
    const mapKeys = card.keys.map((item, k) => {
      return (<li key={k}>{item}</li>)
    });
    const mapRevKeys = card.revkeys.map((item, k) => {
      return (<li key={k}>{item}</li>)
    });
    const mapDesc = card.desc.map((item, k) => {
      return (<p key={k}>{item}</p>)
    });
    const mapRevDesc = card.revdesc.map((item, k) => {
      console.log("revdesc", card.revdesc)
      return (<p key={k}>{item}</p>)
    });
    return(
      <div className="cardmodal modal">
        <div className="close-modal-box">
          <button className="close-modal-btn" onClick={closeCardModal}>X</button>
        </div>
        <div className="grid two-column-grid forty-sixty">
          <section style={{padding: '20px'}}>
            <img style={{transform: `rotate(${180*card.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${card.title}`}/>
          </section>
          <section>
                
                { card.title.length > 0 && <h1>{card.title}</h1> }
                { card.subtitle.length > 0 && <h3>{card.subtitle}</h3> }
                { card.element.length > 0 && <p>{card.element}</p> }
                { card.subelem.length > 0  && <p>{card.subelem} subelem</p> }
                { card.major.length > 0 && <p>{card.major}</p> }
                { card.astro.length > 0 && <section>Ruled by {card.astro}</section>}
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