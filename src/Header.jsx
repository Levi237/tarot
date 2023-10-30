import React                        from 'react';
import NavMenu                      from './components/nav';
import './Header.css';

import Dropdown                     from './components/dropdown/Dropdown';

const Header = ({ user, clickSignOut, openSignIn, layout, layouts, selectLayout }) => {
    return(
        <header>
            <section>
                
                <h3 className="header-title">Tarot To Me</h3>

            </section>
            <section>
                { layout.id
                ? <h4>{layout.name}</h4>
                : <Dropdown 
                    list={layouts} 
                    defaultText={"Choose a Spread"}
                    defaultValue={""}
                    selectedData={layout}
                    selectFunction={selectLayout} 
                    defaultOption={true}
                    />
                }
            </section>
            <section>
                <NavMenu user={user} clickSignOut={clickSignOut} openSignIn={openSignIn}/>
            </section>
        </header>
    );
};
export default Header;