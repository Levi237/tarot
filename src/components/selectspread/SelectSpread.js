import React, {useEffect, useState} from 'react';
import { Link }                     from 'react-router-dom';
import MenuList                     from '../menulist/MenuList';
import * as routes                  from '../../constants/routes';

import './SelectSpread.css';

const SelectSpreadBanner = ({layout, layouts, selectLayout}) => {

   const [keyNum, setKeyNum] = useState(3);

    return (
        <div className="two-column-spread-preview-wrapper">
            <div className="grid two-column-spread-preview body-width">
                <div className="info-window">
                    <h2>{layout.name ? layout.name : layouts[keyNum].name}</h2>
                    <p>{layout.note ? layout.note : layouts[keyNum].note}</p>
                    <div className="spread-preview">
                        <img src={`./spread/${layout.type ? layout.type : layouts[keyNum].type}.png`}/>
                    </div>
                </div>
                <div>
                    <MenuList                 
                        list={layouts} 
                        selectedData={layout}
                        selectFunction={selectLayout} 
                        defaultKeyNum={keyNum}
                    />
                    <Link className="btn dark-style" to={routes.READ} id={layouts[keyNum].id} onClick={(e) => {{!layout.id && selectLayout(e)}}}>Start Spread</Link>
                </div>
            </div>
        </div>
    );
};

export default SelectSpreadBanner;