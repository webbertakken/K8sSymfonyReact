import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../_nav';
// routes config
import routes from '../routes';
import DemoAside from './DemoAside';
import DemoFooter from './DemoFooter';
import DemoHeader from './DemoHeader';

class Demo extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DemoHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}>
              <li className="breadcrumb-menu d-md-down-none">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <a className="btn" href="/dashboard/demo"><i className="icon-speech" /></a>
                  <a className="btn" href="/dashboard/demo"><i className="icon-graph" /> &nbsp;Dashboard</a>
                  <a className="btn" href="/dashboard/demo"><i className="icon-settings" /> &nbsp;Settings</a>
                </div>
              </li>
            </AppBreadcrumb>
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => (route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (<route.component {...props} />)}
                  />
                    ) : (null)))}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden display="lg">
            <DemoAside />
          </AppAside>
        </div>
        <AppFooter fixed>
          <DemoFooter />
        </AppFooter>
      </div>
    );
  }
}

export default Demo;
