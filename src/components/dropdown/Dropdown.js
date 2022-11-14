import React from 'react';

import './dropdown.css';

//==> Flexible Options Menu
//======>> props:
//=============>> defaultText       default option text
//=============>> defaulValue       default option value
//=============>> list              list of options
//=============>> selectFucntion    function called with onchange event
//=============>> selectedData      pass data from selection to signal removal of default option

const Dropdown = ({defaultText, defaultValue, hideDefaultOnSelect, list, selectFunction, selectedData}) => {

    const showList = list.map((item, key) => {
        console.log(selectedData.id)
        return (<option value={item.id} key={key}>{item.name}</option>)
    });

    return (
        <select className="dropdown" onChange={selectFunction}>
            { (!selectedData.id  && hideDefaultOnSelect) && <option id="dropdown-default" value={defaultValue}>{defaultText}</option> }
            {showList}
        </select>
    );
};



export default Dropdown;