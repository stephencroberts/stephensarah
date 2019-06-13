import React from 'react';
import PropTypes from 'prop-types';

class Waypoint extends React.Component {
  constructor(props) {
    super(props);
    this.waypoint = null;
    this.state = {
      offset: 0,
      isVisible: false,
      position: 'above',
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

  checkWaypoint() {
    let isVisible = null;
    let position = null;

    const waypointRect = this.waypoint.getBoundingClientRect();
    const isWaypointVisible = waypointRect.top >= 0
      && waypointRect.left >= 0
      && waypointRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      && waypointRect.right <= (window.innerWidth || document.documentElement.clientWidth);

    if (isWaypointVisible === true && this.state.isVisible === false) {
      isVisible = true;
    } else if (isWaypointVisible === false && this.state.isVisible=== true) {
      isVisible = false;
    }

    if (waypointRect.top > document.documentElement.scrollTop
      && this.state.position !== 'above') {
      position = 'above';
    } else if (waypointRect.top < document.documentElement.scrollTop
      && this.state.position !== 'below') {
      position = 'below';
    }

    if (isVisible !== null || position !== null) {
      this.setState(prevState => ({
        isVisible: isVisible === null ? prevState.isVisible: isVisible,
        position: position === null ? prevState.position : position,
      }), () => {
        if (typeof this.props.onVisibilityChange === 'function') {
          this.props.onVisibilityChange({
            isVisible: this.state.isVisible,
            position: this.state.position,
          });
        }
      });
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
