import React from 'react';

import './hamburger.css';

const Hamburger = ({hamburgerFunction, hamburgerStyle}) => {

    return(
        <div id="hamburger-container" name="toggleMenu" onClick={(e) => {hamburgerFunction(e); }}>
            <nav id="hamburger-btn" className={`${hamburgerStyle}`}>
                <section></section>
                <section></section>	
            </nav>
        </div>
    );
};

export default Hamburger;