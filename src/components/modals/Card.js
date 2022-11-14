import React from 'react';

import './card.css'
const CardModal = ({card, closeCardModal}) => {
    return(
      <div className="cardmodal"><button onClick={closeCardModal}>X</button>Card Modal {card.title}</div>  
    );
};

export default CardModal;