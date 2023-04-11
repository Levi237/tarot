import React, {useEffect, useState}  from 'react';
import Layout from '../../components/spread/Layout';
// import MenuList from '../../components/menulist/MenuList';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';

import './dailycard.css';

const DailyCard = ({deck, layouts, viewCard}) => {
   const [hand, setHand] = useState({
    id: 0,
                suit: `major`,
                majorNum: `0`,
                title: `The Fool`,
                subtitle: `Power of Potential`,
                element: [],
                subelem: [],
                astro: [`Uranus`],
                subastro: [`Uranus rules the sign of Aquarius`],
                seph: `The Fool walks the first Tree of Life pathway, connecting Kether with Chokmah`,
                role: ``,
                keys: [`innocence`, `inexperience`, `seeking experience`, `openness`, `lacking guile`, `pure potential`, `travel`, `apprenticeship`, `a life altering journey`, `school of life`, `learning through experience`, `coming into adulthood`],
                revkeys: [`ignorance`, `willful blindness`, `misplaced trust`, `limited potential`, `inexperience`, `failure to learn lessons`, `resistance to change`, `choice or failure to heed warnings`, `canceled or delayed travel plans`],           
                desc: [],
                revdesc: [],
                major: [`The Fool represents each soul's journey through the world over multiple lifetimes. The Fool sets out to sacrifice his innocence through experience in search of wisdom. If The Fool can successfully navigate the 21 stations of the major arcana he will return to spirit as an enlightened sage or ascended master.`],

});

       ////-- Generate random single card for DailyCard after clicking on DailyCard back image
    //    const pickRandomCard = (e) => {
    //     let getDeck = [...deck];
    //     let shuffledDeck = [];
    //     while (getDeck.length > 0) {
    //         let index = Math.floor(Math.random() * getDeck.length);
    //         let card = getDeck[index];
    //         shuffledDeck.push(card);
    //         getDeck.splice(index, 1);
    //     };
    //     setHand([...shuffledDeck[0]]);
    //    }
    //    pickRandomCard();


    return (
        <div className="dailycard flip-card">
            <div className="flip-card-inner">

<div className="flip-card-back">
    <img src="./back.jpg"/>
</div>
<div className="flip-card-face">
<img src={`/cards/${hand.title.toLowerCase().split(' ').join('_')}.jpg`} alt={`${hand.title}`}/>

</div>
            </div>
{/* <Layout hand={hand} layout={layouts[0]} viewCard={viewCard} /> */}
        </div>
    );
};

export default DailyCard;