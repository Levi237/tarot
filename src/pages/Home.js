import React, {}  from 'react';
import SelectSpreadBanner from './banner/SelectSpread';
import Deck from '../components/deck';
import DailyCard from './banner/DailyCard';

const HomePage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    return (
        <div>
            <h3>Welcome to Tarofied Beta</h3>
            <p>This website is best viewed on Desktop</p>
            {/* ADD BANNER COMPONENT FOR CARD OF THE DAY - 
                save card of the day on local browser
                refresh state each day?
                
            */}
            <DailyCard 
                deck={deck} 
                layouts={layouts}
                viewCard={viewCard}
                />
            <SelectSpreadBanner 
                layouts={layouts} 
                layout={layout}
                selectLayout={selectLayout} />
                <h1 className="title">Full Deck</h1>
            <Deck deck={deck} styleId='index-deck' viewCard={viewCard}/>
        </div>
    );
};

export default HomePage;