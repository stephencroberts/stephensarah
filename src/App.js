import React, { Component } from 'react';

import features from './features';

import Hero from './hero';
import Proposal from './proposal';
import Travel from './travel';
import Footer from './footer';

import './normalize.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <>
        <Hero />
        <main>
          { features.proposal &&
          <div className="wrapper--full-width">
            <div className="section">
              <Proposal />
            </div>
          </div>
          }
          { features.travel &&
          <div className="wrapper--full-width">
            <div className="section">
              <Travel />
            </div>
          </div>
          }
          <div className="wrapper--full-width">
            <article className="section">
              <h3>Ceremony & Reception</h3>
              <p>Our wedding is on Saturday, September 7 at 4:00 p.m. at Our Savior's Way Lutheran Church, 43115 Waxpool Road, Ashburn, Virginia  20148.</p>
              <p>Dinner and dance to follow at Clyde's Willow Creek Farm, 42920 Broadlands Boulevard, Broadlands, Virginia.</p>
              <h3>Accomodations</h3>
              <p>Accommodations for the Meyer/Roberts Wedding are at Embassy Suites Hotel and Homewood Suites Hotel, available from 9/5 until 9/8. They are located at 44610 and 44620 Waxpool Road, Ashburn, VA  20147</p>

              <p>They are the hotels closest to the church and the reception venue.  Both hotels offer free shuttle service between the hotel and Dulles Airport.</p>

              <p>The hotels are next door to each other and are connected by an enclosed walkway. The group rates are $109. Each hotel offers the same amenities, including complimentary breakfast. The code for the Meyer/Roberts group rate is MRW.</p>

              <p>The special room rate will only be available until August 6th or until the group block is sold-out, whichever comes first.</p>

              <p>Here is the link for Embassy Suites:</p>

              <a href="https://embassysuites.hilton.com/en/es/groups/personalized/W/WASNLES-MRW-20190905/index.jhtml?WT.mc_id=POG">https://embassysuites.hilton.com/en/es/groups/personalized/W/WASNLES-MRW-20190905/index.jhtml?WT.mc_id=POG</a>

              <p>Here is the link for Homewood Suites:</p>

              <a href="https://homewoodsuites.hilton.com/en/hw/groups/personalized/W/WASLDHW-MRW-20190905/index.jhtml?WT.mc_id=POG">https://homewoodsuites.hilton.com/en/hw/groups/personalized/W/WASLDHW-MRW-20190905/index.jhtml?WT.mc_id=POG</a>
            </article>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
