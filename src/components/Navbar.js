import React from 'react'
import PropTypes from 'prop-types'
 

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg border border-dark  navbar-${props.mode==='theme'?'dark':'white'} bg-${props.mode==='theme'?'secondary':'white'} `}>
    <div className="container-fluid">
      <a  className="navbar-brand text-primary font-weight-bold" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a  className={`dropdown-item text-${props.mode==='theme'?'light':'dark'} bg-${props.mode==='theme'?'dark':'white'}`} href="#">Call  : 6378366695</a></li>
            <li><a  className={`dropdown-item text-${props.mode==='theme'?'light':'dark'} bg-${props.mode==='theme'?'dark':'white'}`} href="#">Email : harshitsoni7620@gmail.com</a></li>
           
          </ul>
        </li>
        
        </ul>

        <div className={`form-check form-switch text-${props.mode==='theme'?'light':'dark'} `}>
     <input className="form-check-input" type="checkbox" role="switch" aria-checked="true" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
       <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Light Mode</label>
</div>
        
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    About:PropTypes.string.isRequired
};
