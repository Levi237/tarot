import React                                from 'react';
import { Routes, Route }                    from 'react-router-dom';
import * as routes                          from './constants/routes';
import './Header.css';

import NavMenu                              from './components/nav';
import Dropdown                             from './components/dropdown/Dropdown';

const Header = ({ user, clearLayout, clickSignOut, openSignIn, layout, layouts, selectLayout }) => {
        //endable upright only
        // const toggleUprightOnly = () => {
        //     document.getElementById('reverse-btn').classList.toggle('toggle-reverse-btn');
        //     if(document.querySelector('.spread-section')){
        //         document.querySelector('.spread-section').classList.toggle('show-reverse-onclick');
        //     }
        //     if(document.querySelector('.reverse')){
        //         document.querySelector('.reverse').classList.toggle('hide');
        //     }
        //     if(document.querySelector('.upright-hide')){
        //         document.querySelector('.upright-hide').classList.toggle('show');
        //     };
        // };
    return(
        <header>
            <section>
                
                <h3 className="header-title">Tarot To Me</h3>

            </section>
            <section>
            <Routes>
                <Route path={routes.DRAW} exact element={
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