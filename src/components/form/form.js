import React from 'react'
import './form.css';
import FormInput from './formInput';

const Form = (props) => {

  const formData = (enteredData) => {

    let formData1 = {
      ...enteredData,
      id: Math.random().toString()
    }

    props.OnfinalDataValue(formData1)
  }

  return (
    <div className='form'>
      <FormInput onSumbitData={formData} />
    </div>
  )
}

export default Form