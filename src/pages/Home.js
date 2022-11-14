import React, {useState}  from 'react';
import SelectSpreadBanner from './banner/SelectSpread';

const HomePage = ({layout, layouts, selectLayout}) => {

    return (
        <div>
            Home Page Test
            <SelectSpreadBanner 
                layouts={layouts} 
                layout={layout}
                selectLayout={selectLayout} />
        </div>
    );
};

export default HomePage;