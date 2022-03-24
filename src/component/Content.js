import React from 'react'
import ContentHoliday from './ContentHoliday'
import ContentMembers from './ContentMembers'
import ContentResort from './ContentResort'
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
        <ContentMembers/>
        <ContentResort/>
    </div>
  )
}

export default Content