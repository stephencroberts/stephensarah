import React, { Component } from 'react';

import features from './features';

import Nav from './nav';
import Hero from './hero';
import Proposal from './proposal';
import Travel from './travel';
import Accommodations from './accommodations';
import Registry from './registry';
import Footer from './footer';

import './normalize.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <Hero />
        <main>
          <div className="wrapper--full-width">
            <div className="section">
              <Proposal />
            </div>
          </div>
          <div className="wrapper--full-width">
            <div className="section">
              <Travel />
            </div>
          </div>
          <div className="wrapper--full-width">
            <div className="section">
              <Accommodations />
            </div>
          </div>
          <div className="wrapper--full-width">
            <div className="section">
              <Registry />
            </div>
          </div>
          <div className="wrapper--full-width">
            <article className="section">
              <h3>Ceremony & Reception</h3>
              <p>Our wedding is on Saturday, September 7 at 4:00 p.m. at Our Savior's Way Lutheran Church, 43115 Waxpool Road, Ashburn, Virginia  20148.</p>
              <p>Dinner and dance to follow at Clyde's Willow Creek Farm, 42920 Broadlands Boulevard, Broadlands, Virginia.</p>
           </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
