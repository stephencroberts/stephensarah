import React from 'react';
import registry from './registry.jpg';

import './registry.css';

const Registry = () => <div id="registry">
  <h2 className="section__heading">Registry</h2>
  <div className="registry__copy">
    <img alt="Registry Items" src={registry} />
    <p>We are so excited to have you all in our lives and love each of you deeply! Your presence at our wedding is gift enough for us, so please do not feel any pressure to give us a gift. However, if you would like to give, we ask that you either send gifts to us in Denver or contribute to one of our cash funds below, as we will be traveling for our wedding with little room to pack.</p>
  </div>
  <div className="registry__button-wrapper">
    <a className="registry__button" target="_blank" href="https://www.blueprintregistry.com/registry/stephensarah">
      Click here to view the registry
    </a>
  </div>
</div>;

export default Registry;
