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
import CoolFrameLayout from '../../components/Layouts/components/FrameLayout';
// Containers
import Dashboard from './partials/Dashboard';
// Services
import registerServiceWorker from '../../services/worker/registerServiceWorker';
import withTracker from '../../services/analytics/withTracker';
// Render
ReactDOM.render((
  <CoolFrameLayout>
    <HashRouter>
      <Switch>
        <Route path="/" name="Dashboard" component={withTracker(Dashboard)} />
      </Switch>
    </HashRouter>
  </CoolFrameLayout>
), document.getElementById('application'));
registerServiceWorker();
