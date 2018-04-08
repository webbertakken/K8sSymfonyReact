import React, { Component } from 'react';
import { Input, Label, Nav, NavItem, NavLink, Progress, TabContent, TabPane } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import avatar2 from '../images/avatars/2.jpg';
import avatar3 from '../images/avatars/3.jpg';
import avatar4 from '../images/avatars/4.jpg';
import avatar5 from '../images/avatars/5.jpg';
import avatar6 from '../images/avatars/6.jpg';
import avatar7 from '../images/avatars/7.jpg';
import avatar8 from '../images/avatars/8.jpg';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DemoAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              <i className="icon-list" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              <i className="icon-speech" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              <i className="icon-settings" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Today</b></small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout callout-warning m-0 py-3">
              <div className="avatar float-right">
                <img src={avatar7} className="img-avatar" alt="avatar 7" />
              </div>
              <div>Meeting with <strong>Bott</strong></div>
              <small className="text-muted mr-3">
                <i className="icon-calendar" />&nbsp; 1 - 3pm
              </small>
              <small className="text-muted">
                <i className="icon-location-pin" />&nbsp; Maisland 15
              </small>
            </div>
            <hr className="mx-3 my-0" />
            <div className="callout callout-info m-0 py-3">
              <div className="avatar float-right">
                <img src={avatar4} className="img-avatar" alt="avatar4" />
              </div>
              <div>Skype with <strong>Megan</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar" />&nbsp; 4 - 5pm
              </small>
              <small className="text-muted"><i className="icon-social-skype" />&nbsp; Online
              </small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Tomorrow</b></small>
            </div>
            <hr className="transparent mx-3 my-0" />
            <div className="callout callout-danger m-0 py-3">
              <div>New UI Project - <strong>deadline</strong></div>
              <small className="text-muted mr-3">
                <i className="icon-calendar" />&nbsp; 10 - 11pm
              </small>
              <small className="text-muted">
                <i className="icon-home" />&nbsp; creativeLabs HQ
              </small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={avatar2} className="img-avatar" alt="avatar2" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar3} className="img-avatar" alt="avatar3" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar4} className="img-avatar" alt="avatar4" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar5} className="img-avatar" alt="avatar5" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar6} className="img-avatar" alt="avatar6" />
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0" />
            <div className="callout callout-success m-0 py-3">
              <div><strong>#10 Startups.Garden</strong> Meetup</div>
              <small className="text-muted mr-3"><i className="icon-calendar" />&nbsp; 1 - 3pm
              </small>
              <small className="text-muted"><i className="icon-location-pin" />&nbsp; Maisland 15
              </small>
            </div>
            <hr className="mx-3 my-0" />
            <div className="callout callout-primary m-0 py-3">
              <div><strong>Team meeting</strong></div>
              <small className="text-muted mr-3"><i className="icon-calendar" />&nbsp; 4 - 6pm
              </small>
              <small className="text-muted"><i className="icon-home" />&nbsp; Webber HQ
              </small>
              <div className="avatars-stack mt-2">
                <div className="avatar avatar-xs">
                  <img src={avatar2} className="img-avatar" alt="avatar2" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar3} className="img-avatar" alt="avatar3" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar4} className="img-avatar" alt="avatar4" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar5} className="img-avatar" alt="avatar5" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar6} className="img-avatar" alt="avatar6" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                </div>
                <div className="avatar avatar-xs">
                  <img src={avatar8} className="img-avatar" alt="avatar8" />
                </div>
              </div>
            </div>
            <hr className="mx-3 my-0" />
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Webber Takken</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Spicy jalapeno bacon ipsum</div>
              <small className="text-muted">Bacon ipsum dolor amet short loin meatloaf biltong rump
                tri-tip, short ribs tail...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Webber Takken</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Spicy jalapeno bacon ipsum</div>
              <small className="text-muted">Bacon ipsum dolor amet short loin meatloaf biltong rump
                tri-tip, short ribs tail...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Webber Takken</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Spicy jalapeno bacon ipsum</div>
              <small className="text-muted">Bacon ipsum dolor amet short loin meatloaf biltong rump
                tri-tip, short ribs tail...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Webber Takken</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Spicy jalapeno bacon ipsum</div>
              <small className="text-muted">Bacon ipsum dolor amet short loin meatloaf biltong rump
                tri-tip, short ribs tail...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img src={avatar7} className="img-avatar" alt="avatar7" />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Webber Takken</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">Spicy jalapeno bacon ipsum</div>
              <small className="text-muted">Bacon ipsum dolor amet short loin meatloaf biltong rump
                tri-tip, short ribs tail...
              </small>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>

            <div className="aside-options">
              <div className="clearfix mt-4">
                <small><b>Option 1</b></small>
                <Label
                  className="switch switch-text switch-pill switch-success switch-sm float-right"
                >
                  <Input type="checkbox" className="switch-input" defaultChecked />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
              <div>
                <small className="text-muted">Bacon ipsum dolor amet porchetta swine capicola beef
                  landjaeger strip steak. T-bone buffalo burgdoggen pancetta sausage chuck pork
                  belly prosciutto andouille short ribs spare ribs tenderloin rump cow.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 2</b></small>
                <Label
                  className="switch switch-text switch-pill switch-success switch-sm float-right"
                >
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
              <div>
                <small className="text-muted">Bacon ipsum dolor amet porchetta swine capicola beef
                  landjaeger strip steak. T-bone buffalo burgdoggen pancetta sausage chuck pork
                  belly prosciutto andouille short ribs spare ribs tenderloin rump cow.
                </small>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 3</b></small>
                <Label
                  className="switch switch-text switch-pill switch-success switch-sm float-right"
                >
                  <Input type="checkbox" className="switch-input" />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
            </div>

            <div className="aside-options">
              <div className="clearfix mt-3">
                <small><b>Option 4</b></small>
                <Label
                  className="switch switch-text switch-pill switch-success switch-sm float-right"
                >
                  <Input type="checkbox" className="switch-input" defaultChecked />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </Label>
              </div>
            </div>

            <hr />
            <h6>System Utilization</h6>

            <div className="text-uppercase mb-1 mt-4">
              <small><b>CPU Usage</b></small>
            </div>
            <Progress className="progress-xs" color="info" value="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>Memory Usage</b></small>
            </div>
            <Progress className="progress-xs" color="warning" value="70" />
            <small className="text-muted">11444GB/16384MB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 1 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="danger" value="95" />
            <small className="text-muted">243GB/256GB</small>

            <div className="text-uppercase mb-1 mt-2">
              <small><b>SSD 2 Usage</b></small>
            </div>
            <Progress className="progress-xs" color="success" value="10" />
            <small className="text-muted">25GB/256GB</small>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DemoAside.propTypes = propTypes;
DemoAside.defaultProps = defaultProps;

export default DemoAside;
