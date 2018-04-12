// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
/* eslint-disable object-curly-newline */

// Services
import withTracker from '../../services/analytics/withTracker';

// Components
import Dashboard from './partials/Dashboard';
import Home from './pages/Home';
import Items from './pages/Items';
import Tags from './pages/Tags';

const routes = [
  { path: '/', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/home', exact: true, name: 'Home', component: withTracker(Home) },
  { path: '/items', name: 'Items', component: withTracker(Items) },
  { path: '/tags', name: 'Tags', component: withTracker(Tags) },
];

export default routes;
