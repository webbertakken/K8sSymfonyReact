import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

class Navbars extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false,
      collapsed: true,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Navbar</strong>
            <div className="card-actions">
              <a
                href="https://reactstrap.github.io/components/navbar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Navbar color="info" light expand="md">
              <NavbarBrand href="/">Bootstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#/components/navbars">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/reactstrap/reactstrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
            </Navbar>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" />
            <strong>Navbar Toggler</strong>
          </CardHeader>
          <CardBody>
            <Navbar color="success" light>
              <NavbarBrand href="/" className="mr-auto">Bootstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#/components/navbars">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Navbars;
