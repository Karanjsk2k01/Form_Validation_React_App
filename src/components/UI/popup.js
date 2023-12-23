import React from 'react';
import ReactDOM from 'react-dom';
import './popup.css';

const Overlay = (props) => (
  <div className='modal'>
    <header className='header'>
      <h2>{props.title}</h2>
    </header>
    <div className='content'>
      <p>{props.message}</p>
    </div>
    <footer className='actions'>
      <button>
        Okay
      </button>
    </footer>
  </div>
);

const Popup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay title={props.title} message={props.message} />,
        document.getElementById('backdrop')
      )}
    </>
  );
};

export default Popup;
