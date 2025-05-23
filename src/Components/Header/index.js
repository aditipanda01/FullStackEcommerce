import React from 'react';
import { Link } from 'react-router-dom';
import CountryDropdown from './CountryDropdown';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";
import Logo from '../../assets/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';

function Header () {
    return (
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">
                        Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
                    </p>
                </div>
            </div>

            {/* Top Header */}
            <header className="header">
                <div className="container">
                    <div className="logoWrapper">
                        <Link to='/'><img src={Logo} alt="Logo" /></Link>
                    </div>

                    <div className="part2">
                        <CountryDropdown />

                        {/* Header Search */}
                       <SearchBox/>

                        <div className="ml-auto-cartTab">
                            <Button className="circle" variant="text">
                                <FaRegUserCircle size={22} />
                            </Button>
                            <span className="ml-auto-price">$3.29</span>
                            <Button className="circle" variant="text">
                                <IoBagOutline size={22} />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Bottom Header */}
            <div className="bottom-header">
                <div className="container">
                    <div className="all-categories-btn">
                        <MdMenu size={18} />
                        <span>All Categories</span>
                        <IoIosArrowDropdown size={18} />
                    </div>

                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/fashion">Fashion</Link>
                        <Link to="/electronic">Electronic</Link>
                        <Link to="/bakery">Bakery</Link>
                        <Link to="/grocery">Grocery</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact Us</Link>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
