import React, { useState, useEffect } from 'react';
import fs from '../firebase/config';
import { collection, doc, getDocs } from "firebase/firestore"; 

const FetchData = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const getTest = collection(fs, 'test');
        const docSnap = await getDocs(getTest);
        console.log("getTest => ", getTest);
        docSnap.forEach((doc) => {
        console.log("doc =>", doc.id)
        })
    }

    return(<>
        Fetch Test
    </>)
}



export default FetchData