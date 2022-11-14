import React from 'react';

import './dropdown.css';

//==> Flexible Options Menu
//======>> PROPS:
//=============>> defaultText           default option text
//=============>> defaulValue           default option value
//=============>> list                  list of options
//=============>> defaultOption         Boolean to remove default option after selection
//=============>> selectFucntion        function called with onchange event
//=============>> selectedData          pass data from selection to signal removal of default option

const Dropdown = ({defaultText, defaultValue, defaultOption, list, selectFunction, selectedData}) => {

    const showList = list.map((item, key) => {
        console.log(selectedData.id)
        return (<option value={item.id} key={key}>{item.name}</option>);
    });

    return (
        <select className="dropdown" onChange={selectFunction}>
            { (!selectedData.id  && defaultOption) && <option id="dropdown-default" value={defaultValue}>{defaultText}</option> }
            {showList}
        </select>
    );
};

export default Dropdown;