import React from 'react';
import PropTypes from 'prop-types';

class Waypoint extends React.Component {
  constructor(props) {
    super(props);
    this.waypoint = null;
    this.state = {
      offset: 0,
      visible: false,
    };
    this.checkWaypoint = this.checkWaypoint.bind(this);
  }

  componentDidMount() {
    this.updateOffset();
    document.addEventListener('scroll', this.checkWaypoint);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.checkWaypoint);
  }

  componentDidUpdate() {
    this.updateOffset();
  }

  updateOffset() {
    const offset = this.waypoint.getBoundingClientRect().top;
    if (offset !== this.state.offset) {
      this.setState({ offset });
    }
  }

  isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  checkWaypoint() {
    const isVisible = this.isElementVisible(this.waypoint);
    if (isVisible === true && this.state.visible === false) {
      this.setState({ visible: true });
      if (typeof this.props.onVisibilityChange === 'function') {
        this.props.onVisibilityChange(true);
      }
    } else if (isVisible === false && this.state.visible === true) {
      this.setState({ visible: false });
      if (typeof this.props.onVisibilityChange === 'function') {
        this.props.onVisibilityChange(false);
      }
    }
  }


  render() {
    return <div ref={(ref) => { this.waypoint = ref; }}></div>;
  }
}

Waypoint.propTypes = {
  onVisibilityChange: PropTypes.func,
};

Waypoint.defaultProps = {
  onVisibilityChange: null,
};

export default Waypoint;
