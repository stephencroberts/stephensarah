import React from 'react';

import './nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);

    this.state = {
      open: false,
    };
  }

  toggleMenu() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
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
    return (<div className="nav">
      <div className="nav__positioner">
        <div className="nav__quick-link"><strong><a target="_blank" href="https://stephensarah.rsvpify.com">RSVP</a></strong></div>
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
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Nav;
