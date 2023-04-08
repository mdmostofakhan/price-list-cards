
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import React, { useEffect, useState } from 'react';

const PhonesBars = () => {
    const [phones,setPhone] = useState([])

    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data))

   useEffect( ()=>{

    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const loadData = data.data.data;
        console.log(loadData)
        const phoneData = loadData.map(phone => {
            const parts = phone.slug.split('-')
            const price = parseInt(parts[1]);
            const phoneInfo = {
                name: phone.phone_name,
                price: price
            }
            return phoneInfo
        })
        console.log(phoneData)
        setPhone(phoneData);
    })

   },[])

    return (
        <div>
            <BarChart
             width={1000}
            height={300}           
            data={phones}>
           <Bar dataKey="price" fill="#8884d8" />
           <XAxis dataKey="name"></XAxis>
           <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default PhonesBars;