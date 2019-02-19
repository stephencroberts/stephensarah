import React, { Component } from 'react';
import video from './engagement_720.m4v';
import './engagement.css';
import poster from './poster.jpg';

class Engagement extends Component {
  render() {
    return (
      <div>
        <h3>ENGAGEMENT</h3>
        <video className="engagement__video" controls poster={poster}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Engagement;
