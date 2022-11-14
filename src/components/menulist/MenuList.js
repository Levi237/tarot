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

const MenuList = ({list, selectFunction, selectedData}) => {
    const indexDefault = 2;

    const showList = list.map((item, key) => {
        return (<li 
                    className={key === indexDefault && "active"}
                    value={item.id} 
                    key={key}>
                    <button value={item.id} onClick={selectFunction}>
                        {item.name}
                    </button>
                </li>);
    });

    return (
        <ul className="menulist" >
            {showList}
        </ul>
    );
};

export default MenuList;