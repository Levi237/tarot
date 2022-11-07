import React, { useState, useEffect } from 'react';
import db from '../firebase/config';

import { collection, query, getDocs } from "firebase/firestore";

const FetchData = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData(){
        const q = query(collection(db, "test"));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (doc) {
                setTest(prevState => ([...prevState, {
                    id: doc.id, data: doc.data()
                }]));
                console.log(doc.data());
            } else {
                console.log('nothing');
            }
            console.log(doc.id, " => ", doc.data().testString);
        });
    }

    return(<>
        Fetch Test
    </>)
}



export default FetchData