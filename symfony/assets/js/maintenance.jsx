import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';

import Layout from './components/FrameLayout';
import MaintenancePage from './pages/MaintenancePage';

// Assign globals
window.$ = $;

// Mount components
const maintenance = document.getElementById('maintenance');
if (maintenance) {
  ReactDOM.render([
    <Layout>
      <MaintenancePage />
    </Layout>,
  ], maintenance);
}

