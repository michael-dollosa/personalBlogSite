import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({navbar}) => {
    
    return(
        <nav className={navbar ? 'navbar-dark' : 'navbar-white'}>
            <div className="navbar-container">
                <div className="navbar-logo">MICHAEL <span className="active">DOLLOSA</span></div>
                <div className="navbar-links">
                    <Link to='/'>HOME</Link>
                    <Link to='/blog'>BLOGS</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
