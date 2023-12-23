import React from 'react'
import { ReactPortal } from 'react'
import './popup.css'
const Popup = (props) => {

  const overlay = (props) => {
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
  }


  return (
    ReactDOM.createPortal(<overlay title={props.title} message={props.message} />)
  )
}

export default Popup