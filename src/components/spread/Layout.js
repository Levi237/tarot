//=> Create Layout display
import React from 'react';

import './layouts.css';

const Layout = ({hand, layout, viewCard}) => {

    const showHand = hand.map((data, key) => {
        const img = data.title.toLowerCase().split(' ').join('_');
        return (
            <div key={key}  onClick={(e) => viewCard(e, data)}>
                <img style={{transform: `rotate(${180*data.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${data.title}`}/>
            </div>
        );
    });

    return(<>     
        <div className={`${layout.type}`}> 
            <section class="spread-section">
                {showHand}
            </section>
        </div>
    </>);
};

export default Layout;