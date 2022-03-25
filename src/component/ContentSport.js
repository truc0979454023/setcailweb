import React from 'react'

const ContentSport = () => {
    const url = 'https://youtube.com/embed/z9Ul9ccDOqE'
    return (
        <div className='sport'>
            <span className='content-trick'>Try Now</span>
            <h2 className='content-title'>Winter Sports</h2>
            <iframe src={url} frameBorder="0" allowFullScreen className='sport-video'></iframe>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis sit amet, consectetuer adipiscing elit Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit ame</p>
            <button>View More</button>
        </div>
    )
}

export default ContentSport