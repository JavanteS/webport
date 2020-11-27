import React, { useState } from 'react'
import {Button} from './Button'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <>
        <nav className="navbar">
            <Link to="/" className='navbar-logo'>
                Epic
            </Link>
        </nav>
        </>
    )
}

export default Navbar;