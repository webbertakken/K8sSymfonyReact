import 'autotrack/lib/plugins/clean-url-tracker';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/impression-tracker';
import 'autotrack/lib/plugins/max-scroll-tracker';
import 'autotrack/lib/plugins/media-query-tracker';
import 'autotrack/lib/plugins/outbound-form-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/page-visibility-tracker';
import 'autotrack/lib/plugins/social-widget-tracker';
import 'autotrack/lib/plugins/url-change-tracker';

/* eslint-disable no-undef */
ga('create', 'UA-77602014-1', 'auto');

ga('require', 'cleanUrlTracker');
ga('require', 'eventTracker');
ga('require', 'impressionTracker');
ga('require', 'maxScrollTracker');
ga('require', 'mediaQueryTracker');
ga('require', 'outboundFormTracker');
ga('require', 'outboundLinkTracker');
ga('require', 'pageVisibilityTracker');
ga('require', 'socialWidgetTracker');
ga('require', 'urlChangeTracker');

ga('send', 'pageview');
/* eslint-enable no-undef */
