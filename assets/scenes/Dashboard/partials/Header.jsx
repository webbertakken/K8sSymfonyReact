import React from 'react';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

import {
  AppAsideToggler,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';
import AppHeaderDropdown from '@coreui/react/es/HeaderDropdown';

export default class Header extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {};

  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: '/static/images/brand/logo.svg',
            height: 40,
            width: 'auto',
            alt: 'ItchyBitchySpider Logo',
          }}
          minimized={{
            src: '/static/images/brand/logo-symbol.svg',
            height: 40,
            width: 40,
            alt: 'ItchyBitchySpider Symbol',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="ml-auto" navbar>{ /* Keep AppSidebarToggler to the left */ }</Nav>

        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}
