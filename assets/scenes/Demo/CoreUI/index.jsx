import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '@coreui/coreui/scss/coreui.scss';
// Layouts
import Layout from '../../../components/Layouts/components/FrameLayout/index';
// Containers
import Demo from './partials/Demo';
// Services
import registerServiceWorker from '../../../services/worker/registerServiceWorker';
import withTracker from '../../../services/analytics/withTracker';
// Views
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Page404 from './components/Pages/Page404/Page404';
import Page500 from './components/Pages/Page500/Page500';
// Render
ReactDOM.render((
  <Layout>
    <HashRouter>
      <Switch>
        <Route exact path="/login" name="Login Page" component={withTracker(Login)} />
        <Route exact path="/register" name="Register Page" component={withTracker(Register)} />
        <Route exact path="/404" name="Page 404" component={withTracker(Page404)} />
        <Route exact path="/500" name="Page 500" component={withTracker(Page500)} />
        <Route path="/" name="Home" component={withTracker(Demo)} />
      </Switch>
    </HashRouter>
  </Layout>
), document.getElementById('application'));
registerServiceWorker();
