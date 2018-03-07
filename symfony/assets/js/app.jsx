import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';

// Import components
import ImageElement from './components/ImageElement';
import Layout from './components/FrameLayout';

// Import images
import image from '../images/screwdriver.png';

// Assign globals
window.$ = $;

// Mount components
const checkout = document.getElementById('application');
if (checkout) {
  ReactDOM.render([
    <Layout>
      <ImageElement image={image} alt="testing" />
    </Layout>,
  ], checkout);
}

