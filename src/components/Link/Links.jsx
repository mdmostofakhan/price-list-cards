import React from 'react';

const Links = ({rounte}) => {
    return (
        <li className='mr-12 hover:bg-purple-600'>
            <a href={rounte.path}>{rounte.name}</a>
        </li>
    );
};

export default Links;