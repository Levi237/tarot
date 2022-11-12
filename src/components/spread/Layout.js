//=> Create Deck to be used in Draw 23/44
import React, { useState, useEffect }   from 'react';

import './layouts.css';

const Layout = ({hand, layout}) => {

    const showHand = hand.map((h, key) => {
        const img = h.title.toLowerCase().split(' ').join('_');
        return (
            <div key={key} onClick={() => this.onSelectCard(h)}>
                <img style={{transform: `rotate(${180*h.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${h.title}`}/>
            </div>
        );
    });

    return(
        <div className=""> 
            {showHand}
        </div>
    )
};
export default Layout;