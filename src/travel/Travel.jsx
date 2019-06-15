import React from 'react';

import Airports from './Airports';
import Transportation from './Transportation';

import './travel.css';

const Travel = () => <div id="travel" className="travel">
  <h2 className="section__heading">Travel & Transportation</h2>
  <div>
    <Airports />
    <Transportation />
  </div>
</div>;

export default Travel;
