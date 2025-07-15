import React from 'react'
import { getAqiDescription, getAqiColorClass } from '../../../utils/aqiUtils'
import './AQIDescription.module.css' 

const AQIDescription = ({ aqi }) => {
  const description = getAqiDescription(aqi)
  const colorClass = getAqiColorClass(aqi)

  return (
    <span className={`aqi-description ${colorClass}`}>
      {description}
    </span>
  )
}

export default AQIDescription