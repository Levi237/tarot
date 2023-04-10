import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import Hamburger from './hamburger';

import './nav.css';

const HamMenu = (props) => {
    const toggleHamMenu = () => {
        const menu = document.getElementById('ham-menu');
        menu.classList.toggle('view-menu');
        menu.classList.toggle('hide-menu');
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    }
return (<>
    <Hamburger hamburgerFunction={toggleHamMenu}/>
    <div id="ham-menu" className="hide-menu">
        <div>
{props.children}       </div>
    </div></>)
}

export default HamMenu