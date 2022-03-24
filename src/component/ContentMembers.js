import React, { useEffect, useState } from 'react'
import team01 from '../img/our-team-img1.jpg'
import team02 from '../img/our-team-img2.jpg'
import team03 from '../img/our-team-img3.jpg'
import team04 from '../img/our-team-img4.jpg'

const ContentMembers = () => {
    const [tour, setTour] = useState(0)
    const [years, setYears] = useState(0)
    const [cottages, setCottages] = useState(0)
    const [restaurants, setRestaursnts] = useState(0)

    useEffect(() => {
        if (tour <= 452) setTour(prev => prev + 1)
        if (years <= 120) setYears(prev => prev + 1)
        if (cottages <= 283) setCottages(prev => prev + 1)
        if (restaurants <= 190) setRestaursnts(prev => prev + 1)

    }, [tour, years, cottages, restaurants])

    return (
        <div className='member'>
            <div className="member-list">
                <div className="member-item">
                    <img src={team01} alt="" />
                    <div className="member-item-info">
                        <h3>Kaohsiung</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem</p>
                        <div className="member-item-info-cons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className="member-item">
                    <img src={team02} alt="" />
                    <div className="member-item-info">
                        <h3>ALex Joyer</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem</p>
                        <div className="member-item-info-cons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className="member-item">
                    <img src={team04} alt="" />
                    <div className="member-item-info">
                        <h3>Salar Brew</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem</p>
                        <div className="member-item-info-cons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>

                <div className="member-item">
                    <img src={team03} alt="" />
                    <div className="member-item-info">
                        <h3>David Killer</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem lorem</p>
                        <div className="member-item-info-cons">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram-square"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>

            </div>
            <div className="member-years" >
                <div className="member-year-item">
                    <h3>{tour}</h3>
                    <p>Tourlists</p>
                </div>

                <div className="member-year-item">
                    <h3>{years}</h3>
                    <p>Years</p>
                </div>

                <div className="member-year-item">
                    <h3>{cottages}</h3>
                    <p>Cottages</p>
                </div>

                <div className="member-year-item">
                    <h3>{restaurants}</h3>
                    <p>Restaursnts</p>
                </div>
            </div>
        </div>
    )
}

export default ContentMembers