import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.min';
import {
  Badge,
  Breadcrumb,
  Button,
  Collapsible,
  CollapsibleItem,
  Dropdown,
  Icon,
  MenuItem,
  Modal,
  Navbar,
  NavItem,
  SideNav,
  SideNavItem,
} from 'react-materialize';

import './styles.scss';

const App = () =>
  <div>
    <header>
      <Navbar brand={<span><Icon>cloud</Icon> Materialize</span>} right>
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
    </header>
    <main className="row">
      <div className="container">
        <div className="row">
          <Collapsible popout defaultActiveKey={1}>
            <CollapsibleItem header="First" icon="filter_drama">
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header="Second" icon="place">
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header="Third" icon="whatshot">
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>
        </div>

        <div className="row">
          <Dropdown
            trigger={
              <Button>Drop me!</Button>
            }
          >
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem divider />
            <NavItem>three</NavItem>
          </Dropdown>

          <Dropdown
            trigger={
              <Button>Dropdown<Icon right>arrow_drop_down</Icon></Button>
            }
          >
            <NavItem>
              one
              <Badge>1</Badge>
            </NavItem>

            <NavItem>
              two
              <Badge newIcon>1</Badge>
            </NavItem>

            <NavItem>
              three
            </NavItem>
          </Dropdown>
        </div>
      </div>
    </main>
  </div>;

ReactDOM.render(
  <App />, document.getElementById('application'),
);
