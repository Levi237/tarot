import React from 'react';

import './card.css'
const CardModal = ({card, closeCardModal}) => {
    const img = card.title.toLowerCase().split(' ').join('_');
    return(
      <div className="cardmodal"><button onClick={closeCardModal}>X</button>
      <div>
          Card Modal {card.title}
      </div>
      <div>
      <img style={{transform: `rotate(${180*card.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${card.title}`}/>
      </div>
      </div>  
    );
};

export default CardModal;