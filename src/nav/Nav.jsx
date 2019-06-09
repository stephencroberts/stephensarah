import React from 'react';

import './nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      open: false,
    };
  }

  handleMenuClick() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
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
              <li className="nav__menu-item" onClick={this.handleMenuClick}><a href="#home">Home</a></li>
              <li className="nav__menu-item" onClick={this.handleMenuClick}><a href="#proposal">The Proposal</a></li>
              <li className="nav__menu-item" onClick={this.handleMenuClick}><a href="#travel">Travel & Transportation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Nav;
