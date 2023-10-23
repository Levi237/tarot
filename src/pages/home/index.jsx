import React, {}            from 'react';

import SelectSpreadBanner   from '../../components/selectspread/SelectSpread';
// import Deck                 from '../../components/deck';
import DailyCard            from '../../sections/DailyCard';

const HomePage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    return (
        <div id="home-page_id">
            <DailyCard 
                deck={deck} 
                layouts={layouts}
                viewCard={viewCard}
            />

            <SelectSpreadBanner 
                layouts={layouts} 
                layout={layout}
                selectLayout={selectLayout} 
            />
            {/* <h1 className="title">Full Deck</h1> */}
            {/* <Deck deck={deck} styleId='index-deck' viewCard={viewCard}/> */}
        </div>
    );
};

export default HomePage;