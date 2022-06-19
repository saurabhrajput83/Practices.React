import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <>
            <nav className='navbar navbar-expand-sm bg-light'>
                <div className='container'>
                    <Link to="home" className='navbar-brand'>React App</Link>
                    <div className='collapse navbar-collapse'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link to="home" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="brands" className='nav-link'>Brands</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="departments" className='nav-link'>Departments</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="products" className='nav-link'>Products</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="shoppingcart" className='nav-link'>Shopping Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;