import React from 'react';

import barbecue from '../../icons/barbeque-flat.svg';

const MaintenancePage = () => (
  <div className="maintenance-page">
    <div className="message-block">
      <object className="logo" type="image/svg+xml" data={barbecue} aria-label="BrowserIcon" />
      <div className="message">
        <h1 className="title">This site can&#39;t be reached</h1>
        <span className="subtitle">
          <strong>spider.wtf</strong> is under maintenance, though it&#39;s nice barbecue weather.
        </span>
      </div>
    </div>
  </div>
);

export default MaintenancePage;
