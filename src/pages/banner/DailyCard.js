import React, {useEffect, useState}  from 'react';
import Layout from '../../components/spread/Layout';
// import MenuList from '../../components/menulist/MenuList';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';

import './dailycard.css';

const DailyCard = ({deck, layouts, viewCard}) => {

   const [hand, setHand] = useState();

    return (
        <div className="">
test
<Layout hand={[...deck[0]]} layout={layouts[0]} viewCard={viewCard} />
        </div>
    );
};

export default DailyCard;