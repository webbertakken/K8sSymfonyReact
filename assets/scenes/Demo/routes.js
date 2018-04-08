import Dashboard from './components/Dashboard/Dashboard';

import Colors from './components/Theme/Colors/Colors';
import Typography from './components/Theme/Typography/Typography';

import Charts from './components/Charts/Charts';
import Widgets from './components/Widgets/Widgets';

// Base
import Cards from './components/Base/Cards/Cards';
import Forms from './components/Base/Forms/Forms';
import Switches from './components/Base/Switches/Switches';
import Tables from './components/Base/Tables/Tables';
import Tabs from './components/Base/Tabs/Tabs';
import Breadcrumbs from './components/Base/Breadcrumbs/Breadcrumbs';
import Carousels from './components/Base/Carousels/Carousels';
import Collapses from './components/Base/Collapses/Collapses';
import Dropdowns from './components/Base/Dropdowns/Dropdowns';
import Jumbotrons from './components/Base/Jumbotrons/Jumbotrons';
import ListGroups from './components/Base/ListGroups/ListGroups';
import Navbars from './components/Base/Navbars/Navbars';
import Navs from './components/Base/Navs/Navs';
import Paginations from './components/Base/Paginations/Pagnations';
import Popovers from './components/Base/Popovers/Popovers';
import ProgressBar from './components/Base/ProgressBar/ProgressBar';
import Tooltips from './components/Base/Tooltips/Tooltips';

// Buttons
import Buttons from './components/Buttons/Buttons/Buttons';
import ButtonDropdowns from './components/Buttons/ButtonDropdowns/ButtonDropdowns';
import ButtonGroups from './components/Buttons/ButtonGroups/ButtonGroups';
import SocialButtons from './components/Buttons/SocialButtons/SocialButtons';

// Icons
import Flags from './components/Icons/Flags/Flags';
import FontAwesome from './components/Icons/FontAwesome/FontAwesome';
import SimpleLineIcons from './components/Icons/SimpleLineIcons/SimpleLineIcons';

// Notifications
import Alerts from './components/Notifications/Alerts/Alerts';
import Badges from './components/Notifications/Badges/Badges';
import Modals from './components/Notifications/Modals/Modals';

import Demo from './partials/Demo';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: Demo },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Swithces', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousels', component: Carousels },
  { path: '/base/collapses', name: 'Collapses', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'ListGroups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'ButtonDropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'ButtonGroups', component: ButtonGroups },
  { path: '/buttons/social-buttons', name: 'Social Buttons', component: SocialButtons },
  { path: '/icons', exact: true, name: 'Icons', component: Flags },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
];

export default routes;
