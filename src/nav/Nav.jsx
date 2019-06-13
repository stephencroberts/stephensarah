import React from 'react';
import PropTypes from 'prop-types';
import smoothscroll from 'smoothscroll-polyfill';

import './nav.css';

smoothscroll.polyfill();

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  handleClickOutside(e) {
    const nav = document.getElementsByClassName('nav__wrapper')[0];
    if (nav.contains(e.target) === false && this.state.open) {
      this.toggleMenu();
    }
  }

  handleMenuClick(e) {
    this.toggleMenu();
  }

  handleMenuItemClick(e) {
    e.preventDefault();
    this.toggleMenu();
    const anchorId = e.target.getAttribute('href').replace('#', '');
    const anchor = document.getElementById(anchorId);
    anchor.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const quickLinkClass = this.props.isScrolled
      ? 'nav__quick-link nav__quick-link--scrolled'
      : 'nav__quick-link';
    return (<div className="nav">
      <div className="nav__positioner">
        <div className={quickLinkClass}>
          <strong>
            <a target="_blank" href="https://stephensarah.rsvpify.com">RSVP</a>
          </strong>
        </div>
        <div className="nav__wrapper">
          <label className="nav__label" htmlFor="nav__checkbox">
            <i className="nav__button fas fa-bars"></i>
          </label>
          <input id="nav__checkbox" className="nav__checkbox" type="checkbox" checked={this.state.open} onChange={this.handleMenuClick} />
          <div className="nav__menu-wrapper">
            <ul className="nav__menu-items">
              <li className="nav__menu-item"><a onClick={this.handleMenuItemClick} href="#home">Home</a></li>
              <li className="nav__menu-item"><a onClick={this.handleMenuItemClick} href="#proposal">The Proposal</a></li>
              <li className="nav__menu-item"><a onClick={this.handleMenuItemClick} href="#travel">Travel & Transportation</a></li>
              <li className="nav__menu-item"><a onClick={this.handleMenuItemClick} href="#accommodations">Accommodations</a></li>
              <li className="nav__menu-item"><a onClick={this.handleMenuItemClick} href="#registry">Registry</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }
}

Nav.propTypes = {
  isScrolled: PropTypes.bool,
};

Nav.defaultProps = {
  isScrolled: false,
};

export default Nav;
