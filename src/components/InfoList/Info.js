import React from 'react'
import './Info.css'
import InfoList from './InfoList'

const Info = (props) => {
  return (
    <div className='info'>
      {props.data.map((info) => (
        <InfoList key={info.id} name={info.Name} age={info.Age} />
      ))}
    </div>
  );
}

export default Info