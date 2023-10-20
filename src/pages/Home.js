import React, {}            from 'react';

import SelectSpreadBanner   from './banner/SelectSpread';
import Deck                 from '../components/deck';
import DailyCard            from './banner/DailyCard';

const HomePage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    return (
        <div id="home-page_id">
            <div className="body-width">
            <h3>Welcome to Tarot App Beta</h3>
            <p>This website is best viewed on Desktop</p>
            </div>
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
                <h1 className="title">Full Deck</h1>
            <Deck deck={deck} styleId='index-deck' viewCard={viewCard}/>
        </div>
    );
};

export default HomePage;