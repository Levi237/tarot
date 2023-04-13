import React, {}  from 'react';
import SelectSpreadBanner from './banner/SelectSpread';
import Deck from '../components/deck';
import DailyCard from './banner/DailyCard';
// import { Link } from 'react-router-dom';
// import * as routes from '../constants/routes';

const HomePage = ({deck, layout, layouts, selectLayout, viewCard}) => {

    return (
        <div id="home-page_id">
                  <header>
        Header goes here
      </header>
            {/* ADD BANNER COMPONENT FOR CARD OF THE DAY - 
                save card of the day on local browser
                refresh state each day?
                
            */}
            {/* <div>
                <center>
                <br/><br/><br/>
                <Link className="btn dark-style" to={routes.DRAW} >Start Spread</Link>
                <br/><br/><br/>
                </center>
            </div> */}
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