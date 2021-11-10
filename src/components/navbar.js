import React from 'react'
import { Link } from "react-router-dom";
import  Logo  from '../img/logo.png';

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between h-16 items-center bg-white shadow-sm font-mono fixed w-screen z-50" role='navigation'>
            <Link to='/' className='pl-8 flex items-center font-semibold text-2xl'>
                <img src={Logo} alt="" className="h-8 w-8 mr-2" />
                EGG
            </Link>
            <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 hidden lg:block">
                <Link className="p-4 hover:underline" to="/">Home</Link>
                <Link className="p-4  hover:underline" to="/menu">Menu</Link>
                <Link className="p-4  hover:underline" to="/about">About</Link>
                <Link className="p-4  hover:underline" to="/contact">Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar
