import React from 'react';
import Header from '../header/Header.js';
import photo from './images/foto@2x.png';
import download from './images/download.svg';
import linkedin from './images/linkedin.svg';
import github from './images/github.svg';
import email from './images/email.svg';
import triangle from './images/triangle@2x.png';
import topSquares from './images/top-squares@2x.png';
import bottomSquares from './images/bottom-squares@2x.png';

import './About.css'

const About = () => {
  return(
    <div>
      <div className="About">
        <Header />

        <div className="info-wrapper">
          <img className="top-squares" src={topSquares} alt="top-squares"/>

          <div className="d-flex justify-content-center">
            <div className="d-flex">
              <img src={photo} alt="main"/>

              <div className="info">
                <div className="name">OLÁ, ME CHAMO RAFAEL</div>

                <div className="description">
                  Sou graduando em Ciência da Computação pela UnB e trabalho com solução de problemas, por meio do design e da tecnologia :)
                </div>

                <div className="social">
                  <a className="social-link" href="https://github.com/rafael-fernandes" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" height="38"/>
                  </a>

                  <a className="social-link" href="https://linkedin.com/in/rafael-fernandes-2794b3136" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin" height="38"/>
                  </a>

                  <a className="social-link" href="mailto:spnrafael@gmail.com">
                    <img src={email} alt="email" height="38"/>
                  </a>

                  <a className="btn btn-pink" href="curriculo.pdf">
                    <img className="download" src={download} alt="download" height="16" /> CURRÍCULO
                  </a>
                </div>
              </div>
            </div>
          </div>

          <img className="bottom-squares" src={bottomSquares} alt="bottom-squares" />
        </div>
      </div>

      <img src={triangle} alt="triangle" width="100%"/>
    </div>
  )
}

export default About;