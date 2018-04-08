import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DemoFooter extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span className="ml-auto">
          Created with ❤ by Webber using&nbsp;
          <a href="https://symfony.com/" target="_blank" rel="noopener noreferrer">Symfony</a>,&nbsp;
          <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>,&nbsp;
          <a href="https://coreui.io/" target="_blank" rel="noopener noreferrer">CoreUI</a>,&nbsp;
          <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>.
        </span>
      </React.Fragment>
    );
  }
}

DemoFooter.propTypes = propTypes;
DemoFooter.defaultProps = defaultProps;

export default DemoFooter;
