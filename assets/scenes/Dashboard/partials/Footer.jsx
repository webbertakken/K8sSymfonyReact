import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {};

  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span className="ml-auto">
          Created with ❤ by Webber
        </span>
      </React.Fragment>
    );
  }
}

