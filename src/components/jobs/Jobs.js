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
        badgeText: 'PLATAFORMA WEB',
        photos: [
          { src: 'https://pro2-bar-s3-cdn-cf2.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/df6f38d6-d0dd-4526-9ea7-d93ba8ee5034_rw_1920.png?h=e08bea0e3e7b357c973d9a862b88d5fe' },
          { src: 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/c36c70f1-7a56-4932-b02b-3054c468b28d_rw_1920.png?h=9af123bca0c60d8ab65cde7b7cbffe74' },
          { src: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/a9aa310f-756a-4dea-9aec-becd3f8b00da_rw_600.png?h=a6241aa8753ded85cebf474abda8293b' },
          { src: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/0926fc42-c024-4bce-8dd9-5bcdb828607c_rw_600.png?h=98acf1f429b7f76095035f3464000f0c'},
          { src: 'https://pro2-bar-s3-cdn-cf5.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/6d8a20a7-9ef9-4bbf-aaf7-dc447f6a5994_rw_600.png?h=c79296a5913d9a0f1c7ac17e00fb6380'},
          { src: 'https://pro2-bar-s3-cdn-cf4.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/f245b462-9534-44a5-938d-09ea281aef9d_rw_600.png?h=f91224a07c9f2de072732a9bfe5d26fe'},
          { src: 'https://pro2-bar-s3-cdn-cf3.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/e776a4a0-5c1c-4184-8888-1457077942d2_rw_600.png?h=26bd0730eb437a41996a34febb6c4fbe'}
        ]
      },
      {
        id: 2,
        logo: alimente,
        mockup: alimenteMockup,
        description: '1º Congresso Internacional Low Carb, organizado por Caroline Guilherme, idealizadora do ALIMENTE.',
        buttonText: 'ACESSE O SITE DO EVENTO ALIMENTE',
        buttonLink: 'https://www.eventoalimente.com.br',
        badgeText: 'SITE DE EVENTO',
        photos: [
          { src: 'https://i.imgur.com/DeT4cNH.jpg' },
          { src: 'https://i.imgur.com/epd5Mv3.png' },
          { src: 'https://i.imgur.com/9S77yne.png' },
          { src: 'https://i.imgur.com/BoPqroh.png' }
        ]
      },
      {
        id: 3,
        logo: oncase,  
        mockup: oncaseMockup,
        description: 'A Oncase é uma empresa de data science, big data e inteligência artificial de Recife - PE.',
        buttonText: 'ACESSE O SITE DA ONCASE',
        buttonLink: 'https://oncase.com.br',
        badgeText: 'SITE INSTITUCIONAL',
        photos: [
          { src: 'https://i.imgur.com/5zu193L.png' },
          { src: 'https://i.imgur.com/gibVwU0.png' },
          { src: 'https://i.imgur.com/icktvXr.png' },
          { src: 'https://i.imgur.com/O3u8zzI.png' }
        ]  
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

    this.state.jobs.forEach((job) => {
      if (job.id === this.state.activeJobId) {
        activeJob = (
          <Job
            logo={job.logo}
            mockup={job.mockup}
            description={job.description}
            buttonText={job.buttonText}
            buttonLink={job.buttonLink}
            badgeText={job.badgeText}
            photos={job.photos}
            key={job.id}>
          </Job>
        )
      }
    })

    if (this.state.activeJobId === this.state.jobs.length) {
      rightArrow = null
    }

    if (this.state.activeJobId === 1) {
      leftArrow = null
    }

    return (
      <div className="Jobs" id="Jobs">
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

            <div className="col-md-10 offset-md-1 col-sm-12">
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