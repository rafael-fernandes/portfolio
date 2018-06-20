import React, { Component } from 'react';
import Lightbox from 'react-images';
import './Job.css';

import rightSquare from './images/right-square@2x.png';

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event) {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    let button = (
      <a className="btn btn-pink" href={this.props.buttonLink} target="_blank" rel="noopener noreferrer">{this.props.buttonText}</a>
    )

    if (this.props.buttonLink == undefined) {
      button = null
    }

    return(
      <div className="Job d-flex">
        <div className="info">
          <img className="logo" src={this.props.logo} onClick={this.openLightbox} alt=""/>
    
          <div className="description">{this.props.description}</div>
    
          {button}
        </div>
    
        <div className="mockup">
          <div className="square">
            <img className="right-square" src={rightSquare} alt="right-square"/>
            <span className="badge badge-warning">{this.props.badgeText}</span>
            <img className="image" src={this.props.mockup} onClick={this.openLightbox} alt="mockup"/>
          </div>
        </div>

        <Lightbox images={this.props.photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}

export default Job;