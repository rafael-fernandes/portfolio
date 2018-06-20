import React from 'react';
import logo from './logo@2x.png';
import './Header.css'

const Header = () => {
  return(
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a href="/portfolio" className="navbar-brand">
            <img src={logo} alt="logo" height="30"/>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#Jobs" className="nav-link">TRABALHOS</a>
              </li>

              <li className="nav-item">
                <a href="#Contact" className="nav-link">CONTATO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;