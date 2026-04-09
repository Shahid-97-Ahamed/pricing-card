import React, { useState } from 'react';
import Navlink from './navlink';
import { Menu, MessageCircleX, X } from 'lucide-react';

const navItems = [
    { id: 1, label: "Home", path: "/", icon: "home" },
    { id: 2, label: "Profile", path: "/profile", icon: "user" },
    { id: 3, label: "Settings", path: "/settings", icon: "settings" },
    { id: 4, label: "Logout", path: "/logout", icon: "logout" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navlinks = navItems.map(route => <Navlink key={route.id} route={route} />);
    return (
        // <ul className='flex items-center justify-center gap-4 p-4'>
        //     {
        //         navItems.map(item => <li className='px-4 py-2 text-pink-700 hover:bg-green-100 rounded-full'><a href={item.path}>{item.label}</a></li>)
        //     }
        // </ul>
        <nav className='justify-between flex items-center  text-white p-4 '>
           
            <span className='flex gap-3' onClick={()=>setOpen(!open)}>
                {open ? <X className='md:hidden' /> : <Menu className='md:hidden'/>}
                <ul className={`md:hidden absolute duration-1000 ${open ? "top-14" : "-top-40"} bg-cyan-600 rounded-lg p-4  text-center`}>
                {navlinks}
            </ul>
                <h3>Book Shop</h3>
                
            </span>
            
            <ul className='justify-center gap-4 md:flex hidden'>
                {navlinks}
            </ul>
            
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                Sign In
            </button>
        </nav>

    );
};

export default Navbar;