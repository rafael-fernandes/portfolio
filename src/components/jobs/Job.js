import React from 'react';
import './Job.css';

import rightSquare from './images/right-square@2x.png';

const Job = (props) => {
  return(
    <div className="Job d-flex">
      <div className="info">
        <img src={props.logo} alt=""/>

        <div className="description">{props.description}</div>

        <a className="btn btn-pink" href={props.buttonLink} target="_blank" rel="noopener noreferrer">{props.buttonText}</a>
      </div>

      <div className="mockup">
        <div className="square">
          <img className="right-square" src={rightSquare} alt="right-square"/>
          <span className="badge badge-warning">{props.badgeText}</span>
          <img className="image" src={props.mockup} alt="mockup"/>
        </div>
      </div>
    </div>
  )
}

export default Job;