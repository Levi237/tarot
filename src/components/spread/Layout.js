//=> Create Layout display
import React from 'react';

import './layouts.css';

const Layout = ({hand, layout, viewCard}) => {

    const showHand = hand.map((data, key) => {
        const img = data.title.toLowerCase().split(' ').join('_');

        return (
            <div key={key} id={key} onClick={(e) => viewCard(e, data, layout.order[key])}>
                <img style={{transform: `rotate(${180*data.rotation + 'deg'})`}} src={`/cards/${img}.jpg`} alt={`${data.title} - ${layout.name}`}/>
            </div>
        );
    });

    return(<>     
        <div className={`${layout.type}`}> 
            <section className="spread-section">
                {showHand}
            </section>
        </div>
    </>);
};

export default Layout;