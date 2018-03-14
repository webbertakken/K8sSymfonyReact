import React from 'react';

import barbecue from './icons/barbeque-flat.svg';

const MaintenancePage = () => (
  <div className="maintenance-page">
    <div className="message-block">
      <object className="logo" type="image/svg+xml" data={barbecue} aria-label="BrowserIcon" />
      <div className="message">
        <h1 className="title">This site is under maintenance</h1>
        <span className="subtitle">
          Downtime is expected to take no longer than one barbecue party.
        </span>
      </div>
    </div>
  </div>
);

export default MaintenancePage;
