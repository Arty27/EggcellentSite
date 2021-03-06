import React from 'react'
import { Link } from 'react-router-dom'
const Dropdown = ({isOpen,toggle}) => {
    return (
        <div className={isOpen?'grid grid-rows-4 text-center items-center bg-yellow-400':"hidden"}>
            <Link className="p-4 hover:underline" to="/">Home</Link>
            <Link className="p-4  hover:underline" to="/menu">Menu</Link>
            <Link className="p-4  hover:underline" to="/about">About</Link>
            <Link className="p-4  hover:underline" to="/contact">Contact Us</Link>
        </div>
    )
}

export default Dropdown
