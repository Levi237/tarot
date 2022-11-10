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
    }
return (<>
    <Hamburger toggleNavMenu={toggleNavMenu}/>
    <div id="nav-menu" className="hide-menu">
        <NavLink activeClassName="nav-active" to={routes.ROOT} >HOME</NavLink>
        <NavLink activeClassName="nav-active" to={routes.DRAW} >DRAW CARDS</NavLink>
        { user.uid && <NavLink activeClassName="nav-active" to={routes.ACCT} >ACCOUNT</NavLink> }
        { user.uid ? <button className="signout-" onClick={()=>{clickSignOut();toggleNavMenu();}}>Sign Out</button> : <button id="login-btn"  onClick={()=>{openSignIn();toggleNavMenu();}} >Login</button> }
    </div></>)
}

export default NavMenu