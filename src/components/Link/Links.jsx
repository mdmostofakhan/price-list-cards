import React from 'react';

const Links = ({rounte}) => {
    return (
        <div>
            <li className='mr-12 hover:bg-purple-400'>
                <a href={rounte.path}>{rounte.name}</a>
            </li>
        </div>
    );
};

export default Links;