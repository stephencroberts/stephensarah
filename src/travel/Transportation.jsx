import React from 'react';

const Transportation = () => <>
  <h3>Travel from the airport</h3>
  <div className="transportation__section">
    <ul>
      <li>Embassy Suites: <a target="_blank" href="https://goo.gl/maps/F65e8prqYLp9aFMX6">44610 Waxpool Rd, Ashburn, VA 20147</a></li>
      <li>Homewood Suites: <a target="_blank" href="https://goo.gl/maps/eRsJf61MK5QRYvzF6">44620 Waxpool Rd, Ashburn, VA 20147</a></li>
    </ul>

    <h4>Dulles International to the hotels</h4>
    <div className="travel__details">
      <p><strong>Free shuttle, call on arrival: <a href="tel:+1-703-723-7500">+1 (703) 723-7500</a></strong></p>
      <p>The Embassy Suites and Homewood Suites hotels offer complimentary shuttle service to/from Dulles International (IAD). <strong>You must call to arrange a shuttle upon arrival to the airport: <a href="tel:+1-703-723-7500">+1 (703) 723-7500</a>. The shuttle will arrive in 20-30 minutes.</strong>. More details on the shuttle service are available at: <a target="_blank" href="https://embassysuites3.hilton.com/en/hotels/virginia/embassy-suites-by-hilton-dulles-north-loudoun-WASNLES/maps-directions/index.html">https://embassysuites3.hilton.com/en/hotels/virginia/embassy-suites-by-hilton-dulles-north-loudoun-WASNLES/maps-directions/index.html</a>.
      </p>
      <p>Uber/Lyft services are available for approximately $20 (prices vary with demand and options).</p>
      <p>Car rentals are also available.</p>
    </div>

    <h4>Ronald Reagan Washington National to the hotels</h4>
    <div className="travel__details">
      <p>Uber/Lyft services are available for approximately $50 (prices vary with demand and options).</p>
      <p>Car rentals are available.</p>
      <p>The metro will take you as far as Reston, VA, and you can take an Uber/Lyft from there to the hotels.</p>
    </div>
  </div>

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
