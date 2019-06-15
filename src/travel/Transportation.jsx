import React from 'react';

import dulles from './dulles.jpg';

const Transportation = () => <>
  <h3>Day-of travel</h3>
  <div className="transportation__section">
    <h4>Ceremony</h4>
    <div className="travel__details">
      <p>Our Savior's Way Lutheran Church: <a target="_blank" href="https://goo.gl/maps/AVeEQXnxrphC9bFEA">43115 Waxpool Rd, Broadlands, VA 20148</a></p>
      <p>The church is 10 minutes from the hotels and 15-20 minutes from Dulles International. There are no public transportation options directly to the church.</p>
    </div>
    <h4>Reception</h4>
    <div className="travel__details">
      <p>Clyde's: <a target="_blank" href="https://goo.gl/maps/7fA1RXz7P7L676Cq6">42920 Broadlands Blvd, Broadlands, VA 20148</a></p>
      <p>Clyde's is 5-10 minutes from the church. There are no public transportation options from the church to Clyde's.</p>
    </div>
  </div>
</>;

export default Transportation;
