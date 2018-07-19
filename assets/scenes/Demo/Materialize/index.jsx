import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css';
import {
  Breadcrumb,
  Dropdown,
  Button,
  Navbar,
  NavItem,
  Icon,
  MenuItem,
} from 'react-materialize';

import './styles.scss';

const App = () =>
  <div>
    <Navbar brand="logo" right>
      <NavItem href="#"><Icon>search</Icon></NavItem>
      <NavItem href="#"><Icon>view_module</Icon></NavItem>
      <NavItem href="#"><Icon>refresh</Icon></NavItem>
      <NavItem href="#"><Icon>more_vert</Icon></NavItem>
    </Navbar>
    <Breadcrumb>
      <MenuItem>first</MenuItem>
      <MenuItem>second</MenuItem>
      <MenuItem>third</MenuItem>
    </Breadcrumb>
    <Dropdown trigger={
      <Button>Drop me!</Button>
    }>
      <p>Hello</p>
      <p>Hello</p>
      <p>Hello</p>
      <p>Bye</p>
    </Dropdown>
  </div>;

ReactDOM.render(
  <App />, document.getElementById('application')
);
