import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import 'bootstrap';

// Import components
import ImageElement from './components/ImageElement';

// Import images
import image from '../images/screwdriver.png';

// Assign globals
window.$ = $;

// Mount components
const checkout = document.getElementById('react-root');
if (checkout) {
  ReactDOM.render([
    <ImageElement image={image} alt="testing" />,
  ], checkout);
}

