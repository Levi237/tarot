import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import Hamburger from './hamburger';

import './nav.css';

const NavMenu = ({user, clickSignOut, openSignIn}) => {
    const toggleNavMenu = () => {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('view-menu');
        menu.classList.toggle('hide-menu');
        document.getElementById('hamburger-btn').classList.toggle('hamburger-close');
    }
return (<>
    <Hamburger toggleNavMenu={toggleNavMenu}/>
    <div id="nav-menu" className="hide-menu">
        <div>
            <NavLink to={routes.ROOT} onClick={toggleNavMenu}>HOME</NavLink>
            <NavLink to={routes.DRAW} onClick={toggleNavMenu}>DRAW CARDS</NavLink>
            { user.uid && <NavLink to={routes.ACCT} onClick={toggleNavMenu} >ACCOUNT</NavLink> }
            { user.uid ? <button className="signout-" onClick={()=>{clickSignOut();toggleNavMenu();}}>Sign Out</button> : <button id="login-btn"  onClick={()=>{openSignIn();toggleNavMenu();}} >Login</button> }
        </div>
    </div></>)
}

export default NavMenu