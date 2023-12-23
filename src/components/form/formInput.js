import React, { useState } from 'react';
import './formInput.css';
import Popup from '../UI/popup';

const FormInput = (props) => {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState();

  const textHandler = (e) => {
    e.preventDefault();
    setTextValue(e.target.value);
  };

  const numberHandler = (e) => {
    e.preventDefault();
    setNumberValue(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();

    if (textValue.trim().length === 0) {
      // Show the error popup
      setIsErrorPopupVisible({

        title: 'Invalid Details',
        message: 'Please Enter the valid Name'

      });
      setTextValue('');
      setNumberValue('');
      return;
    }

    if (numberValue.trim().length === 0 || numberValue < 0) {
      // Show the error popup
      setIsErrorPopupVisible({

        title: 'Invalid Details',
        message: 'Please Enter the Age greater than 1'

      });
      setTextValue('');
      setNumberValue('');
      return;
    }

    let formData = {
      Name: textValue,
      Age: +numberValue
    };

    props.onSumbitData(formData);

    // Clearing the form
    setTextValue('');
    setNumberValue('');
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
              value={textValue}
              placeholder='Enter Name'
              onChange={textHandler}
            />
          </div>
          <div className='form__control'>
            <input
              type='number'
              placeholder='Enter Age'
              value={numberValue}
              onChange={numberHandler}
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
