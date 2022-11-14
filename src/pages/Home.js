import React, {useState}  from 'react';
import MenuList from '../components/menulist/MenuList';

const HomePage = ({layout, layouts, selectLayout}) => {

   const [keyNum, setKeyNum] = useState(3)

    return (
        <>
            Home Page Test
            <div className="spread-preview">
                    <img src={`./spread/${layout.type ? layout.type : layouts[keyNum].type}.png`}/>
            </div>
            <MenuList                 
                list={layouts} 
                selectedData={layout}
                selectFunction={selectLayout} 
                defaultKeyNum={keyNum}
            />
        </>
    )
}



export default HomePage;