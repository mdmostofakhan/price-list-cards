import React from 'react';

const PricesCard = ({price}) => {
    return (
        <div>
            <h1 className='text-4xl text-purple-700 font-extarbold '>{price.price}</h1>
            <h1 className='text-2xl font-bold '>{price.name}</h1>
        </div>
    );
};

export default PricesCard;