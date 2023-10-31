import React                                from 'react';
import { Routes, Route, useLocation }                    from 'react-router-dom';
import * as routes                          from './constants/routes';
import './Header.css';

import NavMenu                              from './components/nav';
import Dropdown                             from './components/dropdown/Dropdown';

const Header = ({ user, clearLayout, clickSignOut, openSignIn, layout, layouts, selectLayout }) => {
    // Use page location to specify headery styles
    const location = useLocation().pathname.replace('/','');

    return(
        <header classsName={`${location}-location`}>
            <section>
                <h3 className="header-title">Tarotfied</h3>
            </section>

            <section>
                <Routes>
                    <Route path={routes.READ} exact element={
                        layout.id
                        ? <h4>{layout.name}</h4>
                        : <Dropdown 
                            list={layouts} 
                            defaultText={"Choose a Spread"}
                            defaultValue={""}
                            selectedData={layout}
                            selectFunction={selectLayout} 
                            defaultOption={true}
                            />
                    } />
                </Routes>
            </section>

            <section>
                <NavMenu user={user} clickSignOut={clickSignOut} openSignIn={openSignIn} clearLayout={clearLayout}/>
            </section>
        </header>
    );
};
export default Header;