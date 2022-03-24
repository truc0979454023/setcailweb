import React from 'react'
import logo from '../img/logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-columm">
                <img src={logo} alt="" />
                <span>Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae</span>
                <ul className="footer-contact">
                    <li>
                        <i className="fas fa-envelope"></i>
                        <p>setsail@qode.com</p>
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i>
                        <p>1 562 867 5306</p>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Broadway & Morris St, New York</p>
                    </li>
                </ul>
            </div>

            <div className="footer-columm">
                <h3>Our Recent Posts</h3>
                <ul className="footer-lolumn-post">
                    <li>
                        <span>Visit Thailand, Bali And China</span>
                        <p>September 5, 2021</p>
                    </li>

                    <li>
                        <span>Visit Thailand, Bali And China</span>
                        <p>September 5, 2021</p>
                    </li>

                    <li>
                        <span>Visit Thailand, Bali And China</span>
                        <p>September 5, 2021</p>
                    </li>
                </ul>
            </div>

            <div className="footer-columm">
                <h3>Subscribe to our Newsletter</h3>
                <span>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</span>
                <div className="footer-columm-form">
                    <div className="footer-columm-form-item">
                        <i className="fas fa-user"></i>
                        <input type="text" name="" id="" placeholder='Name' />
                    </div>
                    <div className="footer-columm-form-item">
                        <i className="fas fa-envelope"></i>
                        <input type="email" name="" id="" placeholder='Email' />
                    </div>
                    <button>Subcribe</button>
                </div>
            </div>

            <div className="footer-columm">
                <h3>Our Instagram</h3>
                <span>Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus. Phasellus null</span>
            </div>
        </div>
    )
}

export default Footer