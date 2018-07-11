import React, { Component } from 'react';
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
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';

import avatar1 from '../images/avatars/1.jpg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DemoHeader extends Component {
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
            alt: 'Logo',
          }}
          minimized={{
            src: '/static/images/brand/logo-symbol.svg',
            height: 40,
            width: 40,
            alt: 'Symbol',
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">
              Users
            </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#">
              <i className="icon-bell" />
              <Badge pill color="danger">
                5
              </Badge>
            </NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list" /></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin" /></NavLink>
          </NavItem>
          <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar1} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-bell-o" />
                Updates
                <Badge color="info">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-envelope-o" />
                Messages
                <Badge color="success">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-tasks" />
                Tasks
                <Badge color="danger">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-comments" />
                Comments
                <Badge color="warning">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem header tag="div" className="text-center">
                <strong>Settings</strong>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-user" />
                Profile
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-wrench" />
                Settings
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-usd" />
                Payments
                <Badge color="secondary">42</Badge>
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-file" />
                Projects
                <Badge color="primary">
                  42
                </Badge>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <i className="fa fa-shield" />
                Lock Account
              </DropdownItem>
              <DropdownItem>
                <i className="fa fa-lock" />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}

DemoHeader.propTypes = propTypes;
DemoHeader.defaultProps = defaultProps;

export default DemoHeader;
