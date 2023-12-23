import React, { useState, useRef } from 'react';
import './formInput.css';
import Popup from '../UI/popup';

const FormInput = (props) => {
  let textValue = useRef();
  let numberValue = useRef();
  let collegeValue = useRef();
  // const [textValue, setTextValue] = useState('');
  // const [numberValue, setNumberValue] = useState('');
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

  const formHandler = (e) => {
    e.preventDefault();

    let textValidation = textValue.current.value;
    let numberValidation = numberValue.current.value;
    let collegeValidation = collegeValue.current.value;

    if (textValidation.trim().length === 0) {
      // Show the error popup
      setIsErrorPopupVisible({
        title: 'Invalid Details',
        message: 'Please Enter the valid Name'
      });
      // textValue.current.value = '';
      // numberValue.current.value = '';
      // collegeValidation.current.value = '';
      return;
    }

    if (numberValidation.trim().length === 0 || numberValidation < 0) {
      // Show the error popup
      setIsErrorPopupVisible({

        title: 'Invalid Details',
        message: 'Please Enter the Age greater than 1'

      });
      // textValue.current.value = '';
      // numberValue.current.value = '';
      // collegeValidation.current.value = '';
      return;
    }

    if (collegeValidation.trim().length === 0) {
      setIsErrorPopupVisible({
        title: 'InValid Details',
        message: 'Please Enter the Valid College Name'
      });
      // textValue.current.value = '';
      // numberValue.current.value = '';
      // collegeValidation.current.value = '';
      return;
    }

    let formData = {
      Name: textValidation,
      Age: numberValidation,
      College: collegeValidation
    };

    props.onSumbitData(formData);

    textValue.current.value = ''
    numberValue.current.value = ''
    collegeValue.current.value = ''
  };

  const closeErrorPopup = () => {
    setIsErrorPopupVisible(false);
  };

  return (
    <div>
      {isErrorPopupVisible && (
        <div className='backdrop' onClick={closeErrorPopup}>
          <Popup title={isErrorPopupVisible.title} message={isErrorPopupVisible.message} />
        </div>
      )}

      <div className='form__controls'>
        <form onSubmit={formHandler}>
          <div className='form__control'>
            <input
              type='text'
              placeholder='Enter Name'
              ref={textValue}
            />
          </div>
          <div className='form__control'>
            <input
              type='number'
              placeholder='Enter Age'
              ref={numberValue}
            />
          </div>
          <div className='form__control'>
            <input
              type='text'
              placeholder='Enter College Name'
              ref={collegeValue}
            />
          </div>
          <div className='form__actions'>
            <button type='submit'>Add Entry</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormInput;
