import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FrameLayout extends Component {
  static contextTypes = {
    // Some contextTypes
  };

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  };

  static defaultProps = {
    children: [],
  };

  constructor(props) {
    super(props);
    this.state = this.props;
  }

  render() {
    return (
      <div id="layout" className="frame">
        <div id="frame" />
        <div id="body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
