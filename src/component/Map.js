import React from 'react'
import logo from '../img/logo.png'
import slogan from '../img/sidearea-img-2.png'
import map from '../img/sidearea-img.jpg'

const Map = () => {
    return (
        <div className='map'>
            <i class="fas fa-times"></i>
            <img src={logo} alt="" className="map-logo" />
            <img src={slogan} alt="" className="map-slogan" />
            <img src={map} alt="" className="map-location" />
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipis cing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis theme natoque
            </p>
            <h3>Follow Me</h3>
            <div className="map-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    )
}

export default Map