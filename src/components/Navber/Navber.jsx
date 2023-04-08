import { list } from 'postcss';
import React, { useState } from 'react';
import Links from '../Link/Links';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navber = () => {
        const [open, setOpen]= useState()


    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Products",
          path: "/products"
        },
        {
          id: 4,
          name: "Services",
          path: "/services"
        },
        {
          id: 5,
          name: "Contact Us",
          path: "/contact-us"
        }
      ];

    return (
         <nav className='bg-purple-400'>
           <div onClick={() => setOpen(!open)}>
            {/* <span>{open === true? 'open': 'close'}</span> */}
            <span>{
                 open === true?
                 <Bars3Icon className="h-6 w-6 text-purple-500" />
             :  <XMarkIcon className="h-6 w-6 text-purple-500" />
             }
             </span>
           </div>

            <ul className={`md:flex obsolute md:static duration-500 pl-8 py-2
                       bg-purple-400 ${open ? 'top-6' : '-top-36'}`}>
            {
                routes.map(rounte => <Links
                     key={rounte.id}
                    rounte={rounte}
                    ></Links>)
            }
            </ul>
        </nav>
    );
};

export default Navber;