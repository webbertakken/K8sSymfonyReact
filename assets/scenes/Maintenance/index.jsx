import React from 'react';
import ReactDOM from 'react-dom';

// Local
import Index from './components/MaintenancePage';

// Foreign
import Layout from '../../components/Layouts/components/FrameLayout';

// Maintenance page
ReactDOM.render([
  <Layout>
    <Index />,
  </Layout>,
], document.getElementById('application'));
