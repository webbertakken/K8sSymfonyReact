/* eslint-disable no-unused-vars, no-undef */

// App core scripts and styles
import 'react';
import 'react-dom';
import 'react-router-dom';
import $ from 'jquery';
import 'bootstrap';
import './app.scss';

// Asynchronous, on demand loading of analytics plugins
window.addEventListener('load', () => {
  Promise
    .all([
      import('autotrack/lib/plugins/clean-url-tracker'),
      import('autotrack/lib/plugins/event-tracker'),
      import('autotrack/lib/plugins/impression-tracker'),
      import('autotrack/lib/plugins/max-scroll-tracker'),
      import('autotrack/lib/plugins/media-query-tracker'),
      import('autotrack/lib/plugins/outbound-form-tracker'),
      import('autotrack/lib/plugins/outbound-link-tracker'),
      import('autotrack/lib/plugins/page-visibility-tracker'),
      import('autotrack/lib/plugins/social-widget-tracker'),
      import('autotrack/lib/plugins/url-change-tracker'),
    ])
    .then(() => {
      ga('create', 'UA-77602014-1', 'auto', 'mainTracker');

      ga('mainTracker.require', 'cleanUrlTracker');
      ga('mainTracker.require', 'eventTracker');
      ga('mainTracker.require', 'impressionTracker');
      ga('mainTracker.require', 'maxScrollTracker');
      ga('mainTracker.require', 'mediaQueryTracker');
      ga('mainTracker.require', 'outboundFormTracker');
      ga('mainTracker.require', 'outboundLinkTracker');
      ga('mainTracker.require', 'pageVisibilityTracker');
      ga('mainTracker.require', 'socialWidgetTracker');
      ga('mainTracker.require', 'urlChangeTracker');

      ga('mainTracker.send', 'pageview');
    });
});
/* eslint-enable no-unused-vars, no-undef */

// Temporarily add script directly
$(document).ready(() => {
  $('.js-like-article').on('click', (e) => {
    e.preventDefault();

    const $link = $(e.currentTarget);
    $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

    $.ajax({
      method: 'POST',
      url: $link.attr('href'),
    }).done((data) => {
      $('.js-like-article-count').html(data.hearts);
    });
  });
});
