import React from 'react'
import PropType from 'prop-types'

export default function Navbar(props) {
  return (
           
   <nav className='navbar navbar-expand-lg navbar-${props.mode} bg-white'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.text}</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="Dropdown" aria-expanded="false">
  
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#"></a></li>
            <li><a className="dropdown-item" href="#"></a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#"></a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.text2}</a>
        </li>
      </ul>
      
      <div className="form-check form-switch text-dark">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>    


  )
}


Navbar.propTypes = {
    title:PropType.string.isRequired,
    text2:PropType.string.isRequired
}