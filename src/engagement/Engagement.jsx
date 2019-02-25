import React, { Component } from 'react';
import video from './engagement_720.m4v';
import './engagement.css';
import poster from './poster.jpg';

class Engagement extends Component {
  render() {
    return (
      <div id="proposal" className="engagement">
        <h2>The Proposal</h2>
        <p>It was a perfect Saturday morning when Sarah and Stephen headed out
      to Loveland (aptly named!) Ski Area to hit the slopes. Although Sarah
      knew a proposal was imminent, she did not know the time nor place. They
      started their day with a usual warm-up run to Ptarmigan lift to hit the
      Fire Bowl, a wide and gently sloped run, and in typical Stephen fasion, he
      raced down before Sarah, but little did she know he was doing a trial run
      of the proposal, looking for the right spot, mentally rehearsing the
      steps and making sure the timing would fit.</p>
        <p>The plan was set. Sarah would
      certainly want to do another warm-up, and Stephen knew, or hoped, that
      everything would go smoothly. Up they went for another run at Ptarmigan,
      and down raced Stephen, this time his heart beating out of his chest,
      hoping he wouldn't crash along the way. He raced to the planned spot,
      threw off his gloves, jabbed his poles in the snow to make a back-rest for
      his phone as a camera, and began watching for Sarah to come down. His
      hands trembling so much he could barely open the ring box, he saw Sarah,
      gave her an awkward wave, and trying to remember which knee to put down,
      he succeeded, asking Sarah to marry him!</p>

        <p>If a picture is worth a thousand words, then a video is worth a
      million...
        </p>
        <video className="engagement__video" controls poster={poster}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Engagement;
