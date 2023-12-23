import React from 'react'
import './InfoList.css'

const InfoList = (props) => {
  return (
    <div className='info-item'>
      <div className='info-item__name'>
        {props.name}
      </div>
      <div className='info-item__age'>
        {props.age}
      </div>
      <div className='info-item__name'>
        {props.college}
      </div>
    </div>
  )
}

export default InfoList;