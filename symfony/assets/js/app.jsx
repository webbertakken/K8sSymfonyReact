import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';

import Layout from './components/FrameLayout';

// Assign globals
window.$ = $;

// Mount components
const checkout = document.getElementById('application');
if (checkout) {
  ReactDOM.render([
    <Layout>
      Under construction
    </Layout>,
  ], checkout);
}

