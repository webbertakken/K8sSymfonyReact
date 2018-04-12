import React from 'react';
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
// partials
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Header />
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
                <Redirect from="/" to="/home" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <Aside />
          </AppAside>
        </div>
        <AppFooter>
          <Footer />
        </AppFooter>
      </div>
    );
  }
}
