import React, { useEffect, useState } from 'react';
import PricesCard from '../priceCard/PricesCard';

const PriceList = () => {
    const [prices,setPrices] = useState([])

    useEffect( ()=>{
            fetch('prices.json')
             .then(res => res.json())
             .then(data => setPrices(data));
    },[])

    

    return (
        <div>
            <h2 className='text-5xl font-semibold bg-purple-300 text-center p-4'>Awesome Affordable Price</h2>
            
         <div className='grid grid-cols-3 gap-3'>
         {
                prices.map(price => <PricesCard
                price={price}
                ></PricesCard>)
            }
         </div>
        </div>
    );
};

export default PriceList;

