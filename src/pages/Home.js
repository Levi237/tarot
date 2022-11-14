import React from 'react';
import MenuList from '../components/menulist/MenuList';

const HomePage = ({layout, layouts, selectLayout}) => {

   

    return (
        <>
Home Page Test
<div className="spread-preview">
        <img src={`./spread/${layout.type ? layout.type : layouts[1].type}.png`}/>
</div>
            <MenuList                 
                list={layouts} 
                selectedData={layout}
                selectFunction={selectLayout} 
            />
        </>
    )
}



export default HomePage;