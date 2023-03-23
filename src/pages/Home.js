import React, {}  from 'react';
import SelectSpreadBanner from './banner/SelectSpread';
import Deck from '../components/deck';

const HomePage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    return (
        <div>
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