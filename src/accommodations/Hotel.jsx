import React from 'react';
import PropTypes from 'prop-types';

const Hotel = ({
  address,
  bookingLink,
  detailsLink,
  image,
  name,
}) => <div className="hotel">
  <a
    className="hotel__link"
    target="_blank"
    href={detailsLink}>
      <img className="hotel__image" src={image} alt="Embassy Suites" />
      <div className="hotel__caption">{name}</div>
      <div className="hotel__overlay">Click for details</div>
  </a>
  <div className="hotel__address">{address}</div>
  <div className="hotel__ctas">
    <a
      className="hotel__details"
      target="_blank"
      href={detailsLink}>
      Details
    </a>
    <a
      className="hotel__book-now"
      target="_blank"
      href={bookingLink}>
      Book Now
    </a>
  </div>
</div>;

Hotel.propTypes = {
  address: PropTypes.string.isRequired,
  bookingLink: PropTypes.string.isRequired,
  detailsLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Hotel;
