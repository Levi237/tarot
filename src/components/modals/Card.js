//==> Create Card Modal to display all card information.  
//========> Allow scroll to view all information

import React from 'react';

import './modal.css'
const CardModal = ({card, closeCardModal}) => {
    const img = card.title.toLowerCase().split(' ').join('_');

    // const mapAstro = card.astro.map((item, k) => {
    //   return (<span key={k}>{item}</span>)
    // });
    // const mapSubastro = card.subastro.map((item, k) => {
    //   return (<li key={k}>{item}</li>)
    // });
    // const mapKeys = card.keys.map((item, k) => {
    //   return (<li key={k}>{item}</li>)
    // });
    // const mapRevKeys = card.revkeys.map((item, k) => {
    //   return (<li key={k}>{item}</li>)
    // });
    // const mapDesc = card.desc.map((item, k) => {
    //   return (<p key={k}>{item}</p>)
    // });
    // const mapRevDesc = card.revdesc.map((item, k) => {
    //   console.log("revdesc", card.revdesc)
    //   return (<p key={k}>{item}</p>)
    // });
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
              {/* <h1>{ card.title !== "" ? card.title : "not here: title" }</h1>
              <h3>{ card.subtitle !== "" ? card.subtitle : "not here: subtitle" }</h3>
              <p>{ card.element !== "" ? card.element : "not here: element" }</p>
              <p>{ card.subelem !== "" ? card.subelem : "not here: subelem" }</p>
              <p>{ card.major !== "" ? card.major : "not here: major" }</p>
              <section>{ card.astro !== "" ? "Ruled by " + card.astro : "not here: astro" }</section>
              <ul>{ card.subastro !== "" ? mapSubastro : "not here: subastro" }</ul>
              <br/>
              <h3>Key Notes Upright</h3>
              <ul className="two-col-ul">{ card.keys !== [] ? mapKeys : "not here: keys" }</ul>
              <br/>
              <h3>Key Notes Upside Down</h3>
              <ul className="two-col-ul">{ card.revkeys !== [] ? mapRevKeys : "not here: revkeys" }</ul>
              <section>{ card.desc !== [] ? mapDesc : "not here: desc" }</section>
              <section>{ card.revdesc !== [] ? mapRevDesc : "not here: revdesc" }</section> */}
          </section>
        </div>
      </div>  
    );
};

export default CardModal;