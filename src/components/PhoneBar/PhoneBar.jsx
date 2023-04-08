import React, { useEffect, useState } from 'react';
import axios from {axios};
import { data } from 'autoprefixer';


const PhoneBar = () => {
    const [phones,setPhone] = useState([])

    useEffect( ()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => console.log(data))
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default PhoneBar;