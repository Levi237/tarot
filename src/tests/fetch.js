//=> Get deck from deck collection doc
import React, { useState, useEffect }   from 'react';
import fs                               from '../firebase/config';
import { collection, getDocs }          from 'firebase/firestore'; 

const FetchData = () => {

    const [test, setTest] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const getTest = collection(fs, 'deck');
        const docSnap = await getDocs(getTest);
        docSnap.forEach((doc) => {
            setTest(doc.data().deck);
        });
    };

    return(<>
        Fetch Test
    </>)
};



export default FetchData;