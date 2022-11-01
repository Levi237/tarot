import React, { useState, useEffect } from 'react';
import db from '../firebase/config';

import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const FetchData = () => {

const [test, setTest] = useState([]);

useEffect(() => {

    async function fetchData(){
    const q = query(collection(db, "test"));

    const querySnapshot = await getDocs(q);
    // console.log("collection?", querySnapshot);
    querySnapshot.forEach((doc) => {
        if (doc.exists) {
            console.log(doc);
            setTest(state => ([...state, {
                id: doc.id, data: doc.data()
            }]));
        } else {
            console.log('nothing');
        }
        console.log(doc.id, " => ", doc.data().testString);
    });
    }
    fetchData();
}, []);

    return (
        <>
        Fetch Test
        </>
    )
}



export default FetchData