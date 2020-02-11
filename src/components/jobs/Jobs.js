import React, { Component } from "react";
import Job from "./Job.js";

import rightArrowImage from "./images/right-arrow.svg";
import leftArrowImage from "./images/left-arrow.svg";

import leftSquares from "./images/left-squares@2x.png";

import wecare from "./../../assets/images/wecare-logo.png";
import wecareMockup from "./../../assets/images/wecare-mockup.png";

import wecare1 from "./../../assets/images/prints/wecare1.png";
import wecare2 from "./../../assets/images/prints/wecare2.png";
import wecare3 from "./../../assets/images/prints/wecare3.png";
import wecare4 from "./../../assets/images/prints/wecare4.png";
import wecare5 from "./../../assets/images/prints/wecare5.png";
import wecare6 from "./../../assets/images/prints/wecare6.png";
import wecare7 from "./../../assets/images/prints/wecare7.png";
import wecare8 from "./../../assets/images/prints/wecare8.png";
import wecare9 from "./../../assets/images/prints/wecare9.png";
import wecare10 from "./../../assets/images/prints/wecare10.png";
import wecare11 from "./../../assets/images/prints/wecare11.png";
import wecare12 from "./../../assets/images/prints/wecare12.png";

import alimente from "./../../assets/images/alimente-logo.png";
import alimenteMockup from "./../../assets/images/alimente-mockup.png";

import alimente1 from "./../../assets/images/prints/alimente1.png";
import alimente2 from "./../../assets/images/prints/alimente2.png";
import alimente3 from "./../../assets/images/prints/alimente3.png";
import alimente4 from "./../../assets/images/prints/alimente4.png";
import alimente5 from "./../../assets/images/prints/alimente5.png";
import alimente6 from "./../../assets/images/prints/alimente6.png";
import alimente7 from "./../../assets/images/prints/alimente7.png";
import alimente8 from "./../../assets/images/prints/alimente8.png";
import alimente9 from "./../../assets/images/prints/alimente9.png";

import oncase from "./../../assets/images/oncase-logo.png";
import oncaseMockup from "./../../assets/images/oncase-mockup.png";

import fenix from "./../../assets/images/fenix-logo.png";
import fenixMockup from "./../../assets/images/fenix-mockup.png";

import abihub from "./../../assets/images/abihub-logo.png";
import abihubMockup from "./../../assets/images/abihub-mockup.png";

import plenitude from "./../../assets/images/plenitude-logo.png";
import plenitudeMockup from "./../../assets/images/plenitude-mockup.png";

import plenitude1 from "./../../assets/images/prints/plenitude1.png";
import plenitude2 from "./../../assets/images/prints/plenitude2.png";
import plenitude3 from "./../../assets/images/prints/plenitude3.png";
import plenitude4 from "./../../assets/images/prints/plenitude4.png";

import casapark from "./../../assets/images/casapark-logo.png";
import casaparkMockup from "./../../assets/images/casapark-mockup.png";

import casapark1 from "./../../assets/images/prints/casapark1.png";
import casapark2 from "./../../assets/images/prints/casapark2.png";
import casapark3 from "./../../assets/images/prints/casapark3.png";
import casapark4 from "./../../assets/images/prints/casapark4.png";
import casapark5 from "./../../assets/images/prints/casapark5.png";
import casapark6 from "./../../assets/images/prints/casapark6.png";
import casapark7 from "./../../assets/images/prints/casapark7.png";
import casapark8 from "./../../assets/images/prints/casapark8.png";
import casapark9 from "./../../assets/images/prints/casapark9.png";
import casapark10 from "./../../assets/images/prints/casapark10.png";
import casapark11 from "./../../assets/images/prints/casapark11.png";
import casapark12 from "./../../assets/images/prints/casapark12.png";

import mondo from "./../../assets/images/mondo-logo.png";
import mondoMockup from "./../../assets/images/mondo-mockup.png";

import mondo1 from "./../../assets/images/prints/mondo1.png";
import mondo2 from "./../../assets/images/prints/mondo2.png";
import mondo3 from "./../../assets/images/prints/mondo3.png";
import mondo4 from "./../../assets/images/prints/mondo4.png";
import mondo5 from "./../../assets/images/prints/mondo5.png";

import luckydives from "./../../assets/images/lucky-dives-logo.png";
import luckydivesMockup from "./../../assets/images/lucky-dives-mockup.png";

import luckydives1 from "./../../assets/images/prints/luckydives1.png";
import luckydives2 from "./../../assets/images/prints/luckydives2.png";
import luckydives3 from "./../../assets/images/prints/luckydives3.png";
import luckydives4 from "./../../assets/images/prints/luckydives4.png";
import luckydives5 from "./../../assets/images/prints/luckydives5.png";
import luckydives6 from "./../../assets/images/prints/luckydives6.png";

import "./Jobs.css";

class Jobs extends Component {
  state = {
    jobs: [
      {
        id: 1,
        logo: wecare,
        mockup: wecareMockup,
        description:
          "A WeCare é uma HR Tech de engajamento e gamificação de Brasília.",
        buttonText: "ACESSE O SITE DA WECARE",
        buttonLink: "http://wecareincentivos.com.br",
        badgeText: "APLICAÇÃO WEB",
        photos: [
          { src: wecare1 },
          { src: wecare2 },
          { src: wecare3 },
          { src: wecare4 },
          { src: wecare5 },
          { src: wecare6 },
          { src: wecare7 },
          { src: wecare8 },
          { src: wecare9 },
          { src: wecare10 },
          { src: wecare11 },
          { src: wecare12 }
        ]
      },
      {
        id: 2,
        logo: casapark,
        mockup: casaparkMockup,
        description:
          "Design do aplicativo do shopping Casapark de Brasília com funcionalidades de concierge móvel, lojas, FAQ, entre outras.",
        badgeText: "APLICATIVO",
        photos: [
          { src: casapark1 },
          { src: casapark2 },
          { src: casapark3 },
          { src: casapark4 },
          { src: casapark5 },
          { src: casapark6 },
          { src: casapark7 },
          { src: casapark8 },
          { src: casapark9 },
          { src: casapark10 },
          { src: casapark11 },
          { src: casapark12 }
        ]
      },
      {
        id: 3,
        logo: alimente,
        mockup: alimenteMockup,
        description:
          "1º Congresso Internacional Low Carb, organizado por Caroline Guilherme, idealizadora do ALIMENTE.",
        buttonText: "ACESSE O SITE DO EVENTO ALIMENTE",
        buttonLink: "https://www.eventoalimente.com.br",
        badgeText: "SITE DE EVENTO",
        photos: [
          { src: alimente1 },
          { src: alimente2 },
          { src: alimente3 },
          { src: alimente4 },
          { src: alimente5 },
          { src: alimente6 },
          { src: alimente7 },
          { src: alimente8 },
          { src: alimente9 }
        ]
      },
      {
        id: 4,
        logo: oncase,
        mockup: oncaseMockup,
        description:
          "A Oncase é uma empresa de data science, big data e inteligência artificial de Recife - PE.",
        buttonText: "ACESSE O SITE DA ONCASE",
        buttonLink: "https://oncase.com.br",
        badgeText: "SITE INSTITUCIONAL",
        photos: [
          { src: "https://i.imgur.com/5zu193L.png" },
          { src: "https://i.imgur.com/gibVwU0.png" },
          { src: "https://i.imgur.com/icktvXr.png" },
          { src: "https://i.imgur.com/O3u8zzI.png" }
        ]
      },
      {
        id: 5,
        logo: luckydives,
        mockup: luckydivesMockup,
        description:
          "A Lucky Dives é uma startup de Brasília que cria uma rede mundial entre mergulhadores e escolas de mergulho.",
        badgeText: "APLICAÇÃO WEB",
        photos: [
          { src: luckydives1 },
          { src: luckydives2 },
          { src: luckydives3 },
          { src: luckydives4 },
          { src: luckydives5 },
          { src: luckydives6 }
        ]
      },
      {
        id: 6,
        logo: fenix,
        mockup: fenixMockup,
        description:
          "O Fênix Skins Grátis é um site de entretenimento e premiação para jogadores e inscritos do Youtuber FenixYTB.",
        badgeText: "SITE DE ENTRETENIMENTO",
        photos: [
          {
            src:
              "https://pro2-bar-s3-cdn-cf6.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/ae216edf-ad6a-47b6-991c-e38867e58095_rw_1920.png?h=e32119357bf4c23fc02edd63cd1e9b1a"
          },
          {
            src:
              "https://pro2-bar-s3-cdn-cf5.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/6e0a8096-394a-4d93-a983-82faa1cdcaa2_rw_1920.png?h=a544146bdd325f9578aca7ff52921878"
          },
          {
            src:
              "https://pro2-bar-s3-cdn-cf4.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/f7e8ade5-acfa-4999-95a8-ef746cd7c681_rw_1920.png?h=24003569e6ba0fc6600699d0c061813c"
          },
          {
            src:
              "https://pro2-bar-s3-cdn-cf2.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/d5391e4c-00e7-4e1b-8704-9ec951adae58_rw_1920.png?h=f3d3641fcff8218184a288e40c39d709"
          },
          {
            src:
              "https://pro2-bar-s3-cdn-cf2.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/38b6abda-5be9-495b-944d-bfaf0a35552c_rw_1920.png?h=ce73e04b0f36e45b4b7fafb03d5bcace"
          },
          {
            src:
              "https://pro2-bar-s3-cdn-cf6.myportfolio.com/4c1e29a446c66723dbb2188fd6ff98fb/02879e5f-20eb-4c9c-9b8f-a2d3aa604187_rw_1920.png?h=a4defc541d8bfe9756eec82d99b86eda"
          }
        ]
      },
      {
        id: 7,
        logo: plenitude,
        mockup: plenitudeMockup,
        description:
          "Site institucional da equipe de terapeutas da Plenitude - Brasília para a inscrição em terapias em grupo e galeria de fotos dos seus trabalhos.",
        badgeText: "SITE INSTITUCIONAL",
        photos: [
          { src: plenitude1 },
          { src: plenitude2 },
          { src: plenitude3 },
          { src: plenitude4 }
        ]
      },
      {
        id: 8,
        logo: abihub,
        mockup: abihubMockup,
        description:
          "Startup de educação online, localizada em Recife - PE, focada em experiências de aprendizagem que transformam conteúdos em habilidades reais.",
        buttonText: "ACESSE O SITE DA ABIHUB",
        buttonLink: "http://www.abihub.com.br",
        badgeText: "SITE INSTITUCIONAL",
        photos: [
          { src: "https://i.imgur.com/RKVeG3P.jpg" },
          { src: "https://i.imgur.com/F5LcNsI.png" },
          { src: "https://i.imgur.com/wZ8aolY.png" },
          { src: "https://i.imgur.com/GTzXXcG.png" },
          { src: "https://i.imgur.com/kPNlopI.png" }
        ]
      },
      {
        id: 9,
        logo: mondo,
        mockup: mondoMockup,
        description:
          "A Mondo é uma startup de São Paulo com soluções em automação residencial e casas inteligentes.",
        badgeText: "SITE INSTITUCIONAL",
        buttonText: 'ACESSE O SITE DA MONDO IOT',
        buttonLink: "https://mondoiot.com.br/",
        photos: [
          { src: mondo1 },
          { src: mondo2 },
          { src: mondo3 },
          { src: mondo4 },
          { src: mondo5 }
        ]
      }
    ],
    activeJobId: 1
  };

  slideLeft = () => {
    if (this.state.activeJobId !== 1) {
      this.setState({
        activeJobId: this.state.activeJobId - 1
      });
    }
  };

  slideRight = () => {
    this.setState({
      activeJobId: this.state.activeJobId + 1
    });
  };

  render() {
    let activeJob = null;

    let leftArrow = (
      <img
        className="left-arrow"
        src={leftArrowImage}
        onClick={this.slideLeft}
        alt="left-arrow"
      />
    );

    let rightArrow = (
      <img
        className="right-arrow"
        src={rightArrowImage}
        onClick={this.slideRight}
        alt="right-arrow"
      />
    );

    this.state.jobs.forEach(job => {
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
            key={job.id}
          ></Job>
        );
      }
    });

    if (this.state.activeJobId === this.state.jobs.length) {
      rightArrow = null;
    }

    if (this.state.activeJobId === 1) {
      leftArrow = null;
    }

    return (
      <div className="Jobs" id="Jobs">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="title">
                <img
                  className="left-squares"
                  src={leftSquares}
                  alt="left-squares"
                />{" "}
                MEUS TRABALHOS
              </div>
            </div>
          </div>

          <div className="row slider">
            {leftArrow}

            <div className="col-md-10 offset-md-1 col-sm-12">{activeJob}</div>

            {rightArrow}
          </div>
        </div>
      </div>
    );
  }
}

export default Jobs;
