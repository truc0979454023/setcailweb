import React from 'react'
import ContentHoliday from './ContentHoliday'
import ContentSport from './ContentSport'
import Introduce from './Introduce'
import Review from './Review'
import Slider from './Slider'

const Content = () => {
  return (
    <div>
        <Slider/>
        <Introduce/>
        <ContentSport/>
        <Review/>
        <ContentHoliday/>
    </div>
  )
}

export default Content