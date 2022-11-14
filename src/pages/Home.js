import React, {useState}  from 'react';
// import MenuList from '../components/menulist/MenuList';
import SelectSpreadBanner from './banner/SelectSpread';

// import './spread-banner.css';

const HomePage = ({layout, layouts, selectLayout}) => {

//    const [keyNum, setKeyNum] = useState(3)

    return (
        <div>
            Home Page Test
            <SelectSpreadBanner 
                                    layouts={layouts} 
                                    layout={layout}
                                    selectLayout={selectLayout} />
            {/* <div className="grid two-column-spread-preview">
                <div>
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
                </div>
            </div> */}
        </div>
    )
}



export default HomePage;