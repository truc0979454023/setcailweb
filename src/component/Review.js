import React from 'react'
import user01 from '../img/user-img-2.png'
import user02 from '../img/user-img-7.png'
import user03 from '../img/user-img-3.png'

const Review = () => {
    return (
        <div className='review'>
            <h2 className='content-title' style={{color:'#fff'}}>Top Review</h2>
            <p className='content-des'style={{color:'#fff'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum</p>
            <div className="review-card-list">
                <div className="review-card">
                    <img src={user01} alt="" />
                    <div className="review-card-info">
                        <h3>Taipei</h3>
                        <div className="review-card-info-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy</p>
                        <span>Susan Day</span>
                    </div>
                </div>

                <div className="review-card">
                    <img src={user02} alt="" />
                    <div className="review-card-info">
                        <h3>Taipei</h3>
                        <div className="review-card-info-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy</p>
                        <span>Susan Day</span>
                    </div>
                </div>

                <div className="review-card">
                    <img src={user03} alt="" />
                    <div className="review-card-info">
                        <h3>Taipei</h3>
                        <div className="review-card-info-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <p>Fa etor eviuas lwqedit tas, vut et nihc egam yubulas. Ei euvy</p>
                        <span>Susan Day</span>
                    </div>
                </div>
            </div>
            <div className="review-dot">
                <i className="fas fa-circle"></i>
                <i className="fas fa-circle"></i>
            </div>
        </div>
    )
}

export default Review