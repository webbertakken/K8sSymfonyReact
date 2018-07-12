/* eslint-disable no-unused-vars, no-undef */

// App core
import 'react';
import 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Frontend frameworks
import 'bootstrap';

// Services
import './services/analytics/withTracker';

// Styles
import './app.scss';

// Asynchronous, on demand loading of analytics plugins
window.addEventListener('load', () => {
  let GoogleAnalytics = null;

  Promise
    .all([
      import('react-ga').then((x) => { GoogleAnalytics = x; }),
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
      GoogleAnalytics.initialize('UA-########-#');

      GoogleAnalytics.plugin.require('cleanUrlTracker');
      GoogleAnalytics.plugin.require('eventTracker');
      GoogleAnalytics.plugin.require('impressionTracker');
      GoogleAnalytics.plugin.require('maxScrollTracker');
      GoogleAnalytics.plugin.require('mediaQueryTracker');
      GoogleAnalytics.plugin.require('outboundFormTracker');
      GoogleAnalytics.plugin.require('outboundLinkTracker');
      GoogleAnalytics.plugin.require('pageVisibilityTracker');
      GoogleAnalytics.plugin.require('socialWidgetTracker');
      GoogleAnalytics.plugin.require('urlChangeTracker');

      GoogleAnalytics.pageview(window.location.pathname + window.location.search);
    });
});
