import React from 'react';

const Airports = () => <>
  <h3>Fly in to the area</h3>
  <div className="travel__details">
    <p>Dulles International is the closest and most convenient airport for
      most travelers. Ronald Reagan Washington National is a nice alternative, but be aware
      that transportation to/from the airport will be more expensive and take much longer.
    </p>
    <div className="travel__airports">
      <div className="travel__airport">
        <h4>
          <a href="https://flydulles.com/iad/dulles-international-airport">Dulles International</a> (15 minutes from the hotels)
        </h4>
        <div className="map map--travel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d49622.11262212796!2d-77.48630143883526!3d38.983776366597944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b64740174eb057%3A0x8e01cb201080601d!2sDulles+International+Airport+(IAD)%2C+1+Saarinen+Cir%2C+Dulles%2C+VA+20166!3m2!1d38.9531162!2d-77.45653879999999!4m5!1s0x89b638d7d36d4231%3A0x646889ab8135b8b2!2s44620+Waxpool+Road%2C+Ashburn%2C+VA!3m2!1d39.014447!2d-77.4614579!5e0!3m2!1sen!2sus!4v1558982792614!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen>
          </iframe>
        </div>
      </div>
      <div className="travel__airport">
        <h4>
          <a href="https://www.flyreagan.com/dca/reagan-national-airport">Ronald Reagan Washington National</a> (40 minutes or MUCH longer depending on traffic from the hotels)
        </h4>
        <div className="map map--travel">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d397275.5505256139!2d-77.53156840636393!3d38.9304856950525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89b7b731402fe095%3A0x4168af016d076bad!2sRonald+Reagan+Washington+National+Airport%2C+Arlington%2C+VA!3m2!1d38.851242!2d-77.04023149999999!4m5!1s0x89b638d7d36d4231%3A0x646889ab8135b8b2!2s44620+Waxpool+Road%2C+Ashburn%2C+VA!3m2!1d39.014447!2d-77.4614579!5e0!3m2!1sen!2sus!4v1558983593566!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  </div>
</>;

export default Airports;
