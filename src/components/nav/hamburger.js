import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './hamburger.css';

const Hamburger = ({toggleNavMenu}) => {
    const btnHamburger = () => {
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    }
    return(<>
        <div id="hamburger-container" name="toggleMenu" onClick={(e) => {toggleNavMenu(e); btnHamburger(); }}>
     <nav id="hamburger-btn" className="">
	<section></section>
	<section></section>	
     </nav>
 </div>
 </>
    );
};

export default Hamburger;