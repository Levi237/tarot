import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './hamburger.css';

const Hamburger = ({toggleNavMenu}) => {

    return(<>
        <div id="hamburger-container" name="toggleMenu" onClick={(e) => {toggleNavMenu(e); }}>
     <nav id="hamburger-btn" className="">
	<section></section>
	<section></section>	
     </nav>
 </div>
 </>
    );
};

export default Hamburger;