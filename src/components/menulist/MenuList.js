import React from 'react';

import './menulist.css';

//==> Flexible Options Menu
//======>> PROPS:
//=============>> defaultItem           default item added with data
//=============>> defaulValue           default option value.
//=============>> list                  list of options.
//=============>> defaultOption         Boolean to remove default option after selection.
//=============>> selectFucntion        function called with onchange event.
//=============>> selectedData          pass data from selection to signal removal of default option.

const MenuList = ({list, selectFunction, defaultItem, selectedData}) => {

    const showList = list.map((item, key) => {
        return (<li 
                    className={key === 0 && "active"}
                    value={item.id} 
                    key={key}>
                    {item.name}
                </li>);
    });

    return (
        <ul className="menulist" onChange={selectFunction}>
            {showList}
        </ul>
    );
};

export default MenuList;