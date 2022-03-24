import React from 'react'
import holiday1 from '../img/holiday1.png'
import holiday2 from '../img/holiday2.png'
import holiday3 from '../img/holiday3.png'
import holiday4 from '../img/holiday4.png'

const ContentHoliday = () => {
    return (
        <div className='holiday'>
            <span className="content-trick">Enjoy your</span>
            <h2 className="content-title">Winter Holiday</h2>
            <p className="content-des">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum.</p>
            <div className="holiday-des">
                <div className="holiday-des-item">
                    <img src={holiday1} alt="" />
                    <h3>Restaurants</h3>
                    <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
                <div className="holiday-des-item">
                    <img src={holiday2} alt="" />
                    <h3>Sightseeing</h3>
                    <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
                <div className="holiday-des-item">
                    <img src={holiday3} alt="" />
                    <h3>Shops & Boutiques</h3>
                    <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
                <div className="holiday-des-item">
                    <img src={holiday4} alt="" />
                    <h3>Where to Stay</h3>
                    <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}

export default ContentHoliday