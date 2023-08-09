import React from 'react'
import '../css/components/Header.css'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='header'>
            {/* logo part  */}
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>

            {/* nav part  */}
            <nav>
                <a href="#" className='active'>Home</a>
                <a href="#">Services</a>
                <a href="#">Gallery</a>
                <a href="#">Co-travell</a>
                <a href="#">FAQ's</a>
                <a href="#">Contact Us</a>
                <a href="#">Register</a>
                <i><FaBars /></i>
            </nav>
        </div>
    )
}

export default Header