import React, { useState, useEffect } from 'react';
const StateTest = () => {

    const [ statetest, setStatetest] = useState([]);
    useEffect(() => {
        setStatetest(prevState => (
            [{
                suit: `major`,
                title: `I The Magician`,
                subtitle: ``,
                element: [``],
                subelem: [``],
                astro: `Ruled by Mercury`,
                subastro: `Mercury rules Gemini and Virgo`,
                seph: `Connects Kether with Binah`,
                role: ``,
                keys: [`unity`, `balance`, `understanding the importance of balance`, `early or foundational education`, `learning to use available tools`, `wielding power`, `working within a system`, `directed use of will power`],
                revkeys: [`egocentric worldview`, `inflated sense of self`, `false confidence`, `poor utilization of available tools`, `unjust manipulation of a system`, `causing imbalance`, `attempting to master complexities without understanding the basics`], 
                desc: [``],
                revdesc: [``],
                major: [`The Magician teaches The Fool how to direct his will, and influence his world. The Fool becomes acquainted with his tools and the foundational elements. He learns that he has power, begins to take charge of his life, and specialize his interests.`],
            },
            {
                suit: `major`,
                title: `II The High Priestess`,
                subtitle: ``,
                element: [``],
                subelem: [``],
                astro: `Ruled by the Moon`,
                subastro: `The Moon rules Cancer`,
                seph: `Connects Kether to Tiphareth`,
                role: ``,
                keys: [`balanced forces`, `reflection`, `looking within`, `insight`, `doing inner work`, `hidden information`, `secrets`, `pursuit of deeper understanding`, `potential fertility and growth`, `duality`, `lunar cycles`],
                revkeys: [`power imbalance`, `blindness`, `deceit`, `shallow perspective`, `personal stagnation`, `lack of growth`, `resistance to change`, `looking for external enemies`, `illusions`, `avoiding reflection`],
                desc: [``],
                revdesc: [``],
                major: [`The High Priestess helps The Fool to see the dualities and nuances of the world and himself. He begins to practice spiritual discipline, allowing his high self to influence his thoughts and actions.`],
            },
            {
                suit: `major`,
                title: `III The Empress`,
                subtitle: ``,
                element: [``],
                subelem: [``],
                astro: [`Ruled by Venus`],
                subastro: [`Venus rules Taurus and Libra`],
                seph: `Connects Chokmah with Binah`,
                role: ``,
                keys: [`fertility`, `creativity`, `bounty`, `wealth`, `luxury`, `comfort`, `inspiration`, `breakthroughs`, `finding solutions`, `joyful productivity`, `growth`, `harmon`, `sensual pleasure`, `motherhood`, `divine femininity`, `the earth`],            
                revkeys: [`Infertility`, `loss of a child`, `creative blocks`, `stagnation`, `decay`, `poor harvest`, `depleted natural resources`, `material loss`, `disharmony`, `war`, `destruction`, `famine`, `emptiness`, `choice to remain child free`, `toxic femininity`, `earth in turmoil`],
                desc: [``],
                revdesc: [``],
                major: [`The Empress teaches The Fool to combine the skills of The Magician and High Priestess, conceiving new things and birthing them into being. In her realm The Fool perceives the interconnectedness of all things, value beauty, and take joy in life within and without.`],
            }]
        ));
    }, []);

        return(
            <></>
        );
};
export default StateTest;