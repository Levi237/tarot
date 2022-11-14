//==> Create Card Modal to display all card information.  
//========> Allow scroll to view all information

import React from 'react';

import './modal.css'
const CardModal = ({card, closeCardModal}) => {
    const img = card.title.toLowerCase().split(' ').join('_');
    return(
      <div className="cardmodal modal">
        <div className="close-modal-box">
          <button className="close-modal-btn" onClick={closeCardModal}>X</button>
        </div>
        <div className="two-column-grid">
          <section>
            <img style={{transform: `rotate(${180*card.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${card.title}`}/>
          </section>
          <section>
              Card Modal {card.title}
          </section>
        </div>
      </div>  
    );
};

export default CardModal;