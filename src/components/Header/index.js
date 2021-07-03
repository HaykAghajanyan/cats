import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
            <NavLink className='nav-link' to='/about'>About Cats</NavLink>
        </header>
    )
}

export default Header