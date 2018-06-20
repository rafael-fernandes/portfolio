import React from 'react';

import leftSquares from './images/left-squares@2x.png';
import rightSquares from './images/right-squares@2x.png';

import './Contact.css';

const Contact = () => {
  return(
    <div className="Contact" id="Contact">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="title">
              <img className="left-squares" src={leftSquares} alt="left-squares" /> DIGA OLÁ
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-1">
            <div className="description">
              Fale comigo caso tenha alguma ideia que queira por em prática ou marque um bate-papo para nos conhecermos melhor :)
            </div>
          </div>

          <div className="col-md-5 offset-md-1">
            <form action="https://formspree.io/spnrafael@gmail.com" method="POST">
              <img className="right-squares" src={rightSquares} alt="right-squares"/>
              
              <div className="form-group">
                <label htmlFor="name">Qual o seu nome?</label>
                <input type="text" name="name" className="form-control" required/>
              </div>

              <div className="form-group">
                <label htmlFor="email">E o seu email?</label>
                <input type="email" name="email" className="form-control" required/>
              </div>

              <div className="form-group">
                <label htmlFor="message">Conte um pouco mais da sua ideia...</label>
                <textarea name="message" className="form-control" rows="7" required></textarea>
              </div>

              <button className="btn btn-pink-full" type="submit">ENVIAR MENSAGEM</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;