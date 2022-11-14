import React from 'react';

import './menulist.css';

//==> Flexible Options Menu
//======>> PROPS:
//=============>> defaultKeyNum         Marks the list item to start with as active.
//=============>> list                  list of options.
//=============>> selectFucntion        function called with onchange event.
//=============>> selectedData          pass data from selection to signal removal of default option.

const MenuList = ({list, selectFunction, selectedData, defaultKeyNum}) => {

    const getList = document.getElementsByClassName('menulist-item');
    const activeClass = (e, key) => {
        for (let i = 0; i < getList.length; i++) {
            if (i === key) {
                getList[i].classList.add('active');
            } else {
                getList[i].classList.remove('active');
            }
        };
    };

    const showList = list.map((item, key) => {
        return (<li 
                    id={item.id} 
                    key={key}
                    className={`menulist-item ${key === defaultKeyNum && "active"}`}
                    onClick={(e) => {selectFunction(e); activeClass(e, key)}}
                    >
                        {item.name}
                </li>);
    });

    return (
        <ul className="menulist" >
            {showList}
        </ul>
    );
};

export default MenuList;