import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PricesCard = ({price}) => {
    return (
        <div className='bg-indigo-700 mt-4 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
                <span  className='text-5xl text-purple-700 font-semibold ' >{price.price}</span>
                 <span className='text-2xl text-white'>/month</span></h1>
            <h1 className='text-2xl font-bold text-center'>{price.name}</h1>
            <p className=' font-bold underline text-white'>Features</p>
            {
                price.features.map((feature, idx) => <Feature 
                 key={idx}
                 feature = {feature}
                ></Feature>)
            }
            <button className='bg-green-500 font-bold text-whiten rounded-md w-full mt-auto hover:bg-violet-600'>By Know</button>
        </div>
    );
};

export default PricesCard; 