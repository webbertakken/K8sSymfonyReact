import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FrameLayout extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.props;
  }

  render() {
    return (
      <div id="layout">
        <div id="frame" />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
