import React, { useState, useRef } from 'react'
import logo from '../img/logo.png'
import Map from './Map'



const Header = () => {
    return (
        <div className='header'>
            <img className='header-logo' src={logo} alt="" />
            <ul className="navbar">
                <li>
                    <a href="#!">
                        Home
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Travel Agency
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Winter Holidays
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Summer Holidays
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                City Tours
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Wine Tours
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Vacation Showcase
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Landing
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                New Year Trip
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Pages
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                About Us
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                What We Ofer
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Our Team
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Contact Us
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                FAG Page
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Coming Soon
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Destinations
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Destination List
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Destination Slider
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Destination Itern
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Tours
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Standard List
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Gallery List
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Split List
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Tour Itern
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Blog
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Blog Masonry
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Blog Standard
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Post Types
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Shop
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Product List
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Product Single
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Shop Layout
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Shop Page
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        Elements
                        <div className="navbar-border-bottom"></div>
                    </a>
                    <ul className="subnavbar">
                        <li>
                            <a href="#!">
                                Heading
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Columns
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                Section Title
                                <div className="navbar-border-bottom"></div>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="header-icons">
                <i className="fas fa-shopping-cart" >
                    <div className="notify-cart">
                        <p>No products in the cart </p>
                    </div>
                </i>
                <i className="fas fa-search"> </i>
                <i className="fas fa-bars">
                    <Map />
                </i>
            </div>
        </div>
    )
}

export default Header