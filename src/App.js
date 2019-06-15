import React, { Component } from 'react';

import features from './features';

import Nav from './nav';
import Hero from './hero';
import Proposal from './proposal';
import Travel from './travel';
import Accommodations from './accommodations';
import Registry from './registry';
import Ceremony from './ceremony';
import Footer from './footer';
import Waypoint from './components/Waypoint';

import './normalize.css';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHeroVisible: false,
    };

    this.handleWaypointVisibility = this.handleWaypointVisibility.bind(this);
  }

  handleWaypointVisibility({ isVisible, position }) {
    if (position === 'above' || isVisible) {
      this.setState({ isHeroVisible: false });
    }
  }

  render() {
    return (
      <>
        <Nav isScrolled={!this.state.isHeroVisible} />
        <Hero />
        <Waypoint onVisibilityChange={this.handleWaypointVisibility} />
        <main>
          <div className="wrapper--full-width">
            <div className="section">
              <Proposal />
            </div>
          </div>
          <div className="wrapper--full-width">
            <Travel />
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
              <h2>Ceremony & Reception</h2>
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
