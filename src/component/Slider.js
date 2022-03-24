import React, { useEffect, useState } from 'react'
import pexelsPhoto1 from '../img/pexels-photo.webp'
import pexelsPhoto2 from '../img/pexels-photo-35.jpeg'


const Slider = () => {
  const sliders = [
    {
      url: pexelsPhoto1,
      mainText: "From Alps",
      text: "Snow Adventur",
      subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing alit. Aenean comodo liguta eget dolor. Aenean massa. Cum sociis Theme"
    },
    {
      url: pexelsPhoto2,
      mainText: "Enjoy Youripsum ",
      text: "Winter Vacations",
      subText: "Lorem dolor sit amet, consectetuer adipiscing alit. Aenean comodo liguta eget dolor. Aenean massa. Cum sociis Theme"
    }
  ]
  const [tab, setTab] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTab(prev => prev + 1)
    }, 6000)
    return () => clearTimeout()
  }, [tab])

  const isActive = (index) => {
    if (index === tab%2) return 'isActiveSlider'
  }

  return (
    <div className='slider'>
      {
        sliders.map((slider, i) => (
          <div key={i} className={`slider-item ${isActive(i)}`}>
            <img src={slider.url} alt="" />
            <div className="slider-text">
              <p className="main-text">{slider.mainText}</p>
              <p className="text">{slider.text}</p>
              <p className="sub-text">{slider.subText}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Slider