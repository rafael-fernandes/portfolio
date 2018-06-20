import React, { Component } from 'react';
import Job from './Job.js';

import rightArrowImage from './images/right-arrow.svg';
import leftArrowImage from './images/left-arrow.svg';

import leftSquares from './images/left-squares@2x.png';

import wecare from './images/wecare@2x.png';
import wecareMockup from './images/wecare-mockup@2x.png';

import alimente from './images/alimente@2x.png';
import alimenteMockup from './images/alimente-mockup@2x.png';

import oncase from './images/oncase@2x.png';
import oncaseMockup from './images/oncase-mockup@2x.png';

import './Jobs.css';

class Jobs extends Component {
  state = {
    jobs: [
      { 
        id: 1,
        logo: wecare,
        mockup: wecareMockup,
        description: 'A WeCare é uma startup de incentivos corporativos de Brasília com foco em campanhas de incentivos e recompensas não monetárias.',
        buttonText: 'ACESSE O SITE DA WECARE',
        buttonLink: 'http://wecarecorp.com.br',
        badgeText: 'PLATAFORMA WEB'
      },
      {
        id: 2,
        logo: alimente,
        mockup: alimenteMockup,
        description: '1º Congresso Internacional Low Carb, organizado por Caroline Guilherme, idealizadora do ALIMENTE.',
        buttonText: 'ACESSE O SITE DO EVENTO ALIMENTE',
        badgeText: 'SITE DE EVENTO'
      },
      {
        id: 3,
        logo: oncase,  
        mockup: oncaseMockup,
        description: 'A Oncase é uma empresa de data science, big data e inteligência artificial de Recife - PE.',
        buttonText: 'ACESSE O SITE DA ONCASE',
        badgeText: 'SITE INSTITUCIONAL'      
      }
    ],
    activeJobId: 1
  }

  slideLeft = () => {
    if (this.state.activeJobId !== 1) {
      this.setState({
        activeJobId: this.state.activeJobId - 1
      })
    }
  }

  slideRight = () => {
    this.setState({
      activeJobId: this.state.activeJobId + 1
    })
  }

  render() {
    let activeJob = null

    let leftArrow = (
      <img className="left-arrow" src={leftArrowImage} onClick={this.slideLeft} alt="left-arrow" />
    )

    let rightArrow = (
      <img className="right-arrow" src={rightArrowImage} onClick={this.slideRight} alt="right-arrow" />
    )

    this.state.jobs.map((job) => {
      if (job.id == this.state.activeJobId) {
        activeJob = (
          <Job
            logo={job.logo}
            mockup={job.mockup}
            description={job.description}
            buttonText={job.buttonText}
            buttonLink={job.buttonLink}
            badgeText={job.badgeText}
            key={job.id}>
          </Job>
        )
      }
    })

    if (this.state.activeJobId == this.state.jobs.length) {
      rightArrow = null
    }

    if (this.state.activeJobId == 1) {
      leftArrow = null
    }

    return (
      <div className="Jobs">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="title">
                <img className="left-squares" src={leftSquares} alt="left-squares"/> MEUS TRABALHOS
              </div>
            </div>
          </div>

          <div className="row slider">
            {leftArrow}

            <div className="col-md-10 offset-md-1">
              {activeJob}
            </div>
            
            {rightArrow}
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs;