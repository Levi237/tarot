import React                          from 'react';
import NavMenu                        from './components/nav';
const Header = ({ user, clickSignOut, openSignIn }) => {
    return(
        <header>
        <section>Tarot To Me</section>
        <section>

        </section>
        <section>
        <NavMenu user={user} clickSignOut={clickSignOut} openSignIn={openSignIn}/>
        </section>
        </header>
    );
};
export default Header;