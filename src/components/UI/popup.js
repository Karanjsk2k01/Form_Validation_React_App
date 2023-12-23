import React from 'react'
import './popup.css'
const Popup = (props) => {
  return (
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
  )
}

export default Popup