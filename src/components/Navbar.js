import React from 'react'
import './Navbar.css'
import Cart from '../assets/icons/CartIcon'
import SearchIcon from '../assets/icons/SearchIcon'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar-bg'>
            <div className='container c-navbar'>
                <div className='logo'>
                    <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                        THREADBARE
                    </Link>
                </div>
                <div className='navbar-items'>
                    <div className='navbar-item'>NEW</div>
                    <div className='navbar-item'>DRESSES</div>
                    <div className='navbar-item'>CLOTHING</div>
                    <div className='navbar-item'>ACCESSORIES</div>
                    <div className='navbar-item'>SALE</div>
                </div>
                <div className='side-navbar'>
                    <div className='side-navbar-item'>
                        <div className='search-box'>
                            <input className="input-search-bar" />
                            <div className='search-icon'>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                    <div className='side-navbar-item'>
                        <Link to='/login' style={{ color: "black", textDecoration: 'none' }}>
                            Login
                        </Link>
                    </div>
                    <div className='side-navbar-item cart-bar'>
                        <Cart />
                        <span className='me-2'></span>
                        Cart
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar