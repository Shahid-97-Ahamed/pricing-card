import React from 'react';
import Navlink from './navlink';

const navItems = [
  { id: 1, label: "Home", path: "/", icon: "home" },
  { id: 2, label: "Profile", path: "/profile", icon: "user" },
  { id: 3, label: "Settings", path: "/settings", icon: "settings" },
  { id: 4, label: "Logout", path: "/logout", icon: "logout" }
];

const Navbar = () => {
    return (
        // <ul className='flex items-center justify-center gap-4 p-4'>
        //     {
        //         navItems.map(item => <li className='px-4 py-2 text-pink-700 hover:bg-green-100 rounded-full'><a href={item.path}>{item.label}</a></li>)
        //     }
        // </ul>
       <ul className='flex justify-center gap-5 pt-2 font-bold text-lg'>
        {navItems.map(route => <Navlink key={route.id} route={route}/>)}
       </ul>
    );
};

export default Navbar;