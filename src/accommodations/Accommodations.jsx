import React from 'react';

import Hotel from './Hotel';

import './accommodations.css';

const Accommodations = () => <div id="accommodations">
  <h2 className="section__heading">Accommodations</h2>
  <p>Accommodations for our wedding are at the Embassy Suites Hotel and Homewood
Suites Hotel, the closest hotels to the church and reception venue. They are
next door to each other and are connected by an enclosed walkway, sharing a free
shuttle service to/from Dulles airport.</p>
  <table className="accommodations__details">
    <tr>
      <td className="accommodations__details-header">Group Rate:</td>
      <td className="accommodations__details-value">$109</td>
    </tr>
    <tr>
      <td className="accommodations__details-header">Group Rate Code:</td>
      <td className="accommodations__details-value">MRW</td>
    </tr>
    <tr>
      <td className="accommodations__details-header">Deadline:</td>
      <td className="accommodations__details-value">group rate only available until August 6th or the group block is sold out. Book soon!</td>
    </tr>
    <tr>
      <td className="accommodations__details-header">Dates Available:</td>
      <td className="accommodations__details-value">9/5/2019 - 9/8/2019</td>
    </tr>
    <tr>
      <td className="accommodations__details-header">Shuttle Service:</td>
      <td className="accommodations__details-value">call on arrival to Dulles: <a href="tel:+1-703-723-7500">+1 (703) 723-7500</a></td>
    </tr>
    <tr>
      <td className="accommodations__details-header">Amenities:</td>
      <td className="accommodations__details-value">complimentary breakfast, pool, fitness room, and more! </td>
    </tr>
  </table>
  <div className="accommodations__hotels">
    <Hotel
      address="44610 Waxpool Rd, Ashburn, VA 20147"
      bookingLink="https://embassysuites.hilton.com/en/es/groups/personalized/W/WASNLES-MRW-20190905/index.jhtml?WT.mc_id=POG"
      detailsLink="https://embassysuites3.hilton.com/en/hotels/virginia/embassy-suites-by-hilton-dulles-north-loudoun-WASNLES/index.html"
      image="https://embassysuites3.hilton.com/resources/media/es/WASNLES/en_US/img/shared/full_page_image_gallery/main/ES_exterior001_712x342_FitToBoxSmallDimension_Center.jpg"
      name="Embassy Suites by Hilton Dulles North Loudoun"
    />
    <Hotel
      address="44620 Waxpool Rd, Ashburn, VA 20147"
      bookingLink="https://homewoodsuites.hilton.com/en/hw/groups/personalized/W/WASLDHW-MRW-20190905/index.jhtml?WT.mc_id=POG"
      detailsLink="https://homewoodsuites3.hilton.com/en/hotels/virginia/homewood-suites-by-hilton-dulles-north-loudoun-WASLDHW/index.html"
      image="https://homewoodsuites3.hilton.com/resources/media/hw/WASLDHW/en_US/img/shared/full_page_image_gallery/main/HG_exterior_11_505x305_FitToBoxSmallDimension_Center.jpg"
      name="Homewood Suites by Hilton Dulles North Loudoun"
    />
  </div>
</div>;

export default Accommodations;
