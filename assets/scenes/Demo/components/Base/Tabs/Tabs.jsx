import React, { Component } from 'react';
import { Badge, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

class Tabs extends Component {
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
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Messages
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Strip steak turkey tongue boudin cupim, landjaeger cow bacon sirloin buffalo
                andouille sausage swine spare ribs. Boudin pork belly shoulder tri-tip, capicola
                pastrami pig picanha landjaeger cow pork fatback beef ribs doner. Meatball pastrami
                salami, rump short ribs filet mignon shankle short loin tongue leberkas venison cow
                frankfurter tri-tip alcatra. Sirloin beef cupim kielbasa landjaeger chuck. T-bone
                shank chicken leberkas, jerky pork tongue burgdoggen rump doner ribeye sirloin
                pastrami venison. Leberkas fatback tongue turkey.
              </TabPane>
              <TabPane tabId="2">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
              <TabPane tabId="3">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <i className="icon-calculator" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <i className="icon-basket-loaded" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <i className="icon-pie-chart" />
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Strip steak turkey tongue boudin cupim, landjaeger cow bacon sirloin buffalo
                andouille sausage swine spare ribs. Boudin pork belly shoulder tri-tip, capicola
                pastrami pig picanha landjaeger cow pork fatback beef ribs doner. Meatball pastrami
                salami, rump short ribs filet mignon shankle short loin tongue leberkas venison cow
                frankfurter tri-tip alcatra. Sirloin beef cupim kielbasa landjaeger chuck. T-bone
                shank chicken leberkas, jerky pork tongue burgdoggen rump doner ribeye sirloin
                pastrami venison. Leberkas fatback tongue turkey.
              </TabPane>
              <TabPane tabId="2">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
              <TabPane tabId="3">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <i className="icon-calculator" />
                  <span className={this.state.activeTab === '1' ? '' : 'd-none'}>
                    Calculator
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <i className="icon-basket-loaded" />
                  <span className={this.state.activeTab === '2' ? '' : 'd-none'}>
                    Shopping cart
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <i className="icon-pie-chart" />
                  <span className={this.state.activeTab === '3' ? '' : 'd-none'}>
                    Charts
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Strip steak turkey tongue boudin cupim, landjaeger cow bacon sirloin buffalo
                andouille sausage swine spare ribs. Boudin pork belly shoulder tri-tip, capicola
                pastrami pig picanha landjaeger cow pork fatback beef ribs doner. Meatball pastrami
                salami, rump short ribs filet mignon shankle short loin tongue leberkas venison cow
                frankfurter tri-tip alcatra. Sirloin beef cupim kielbasa landjaeger chuck. T-bone
                shank chicken leberkas, jerky pork tongue burgdoggen rump doner ribeye sirloin
                pastrami venison. Leberkas fatback tongue turkey.
              </TabPane>
              <TabPane tabId="2">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
              <TabPane tabId="3">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
            </TabContent>
          </Col>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <i className="icon-calculator" />
                  <span className={this.state.activeTab === '1' ? '' : 'd-none'}>
                    Calculator
                  </span>
                  {'\u00A0'}
                  <Badge color="success">New </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <i className="icon-basket-loaded" />
                  <span className={this.state.activeTab === '2' ? '' : 'd-none'}>
                    Shopping cart
                  </span>
                  {'\u00A0'}
                  <Badge pill color="danger">
                    29
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <i className="icon-pie-chart" />
                  <span className={this.state.activeTab === '3' ? '' : 'd-none'}>
                    Charts
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Strip steak turkey tongue boudin cupim, landjaeger cow bacon sirloin buffalo
                andouille sausage swine spare ribs. Boudin pork belly shoulder tri-tip, capicola
                pastrami pig picanha landjaeger cow pork fatback beef ribs doner. Meatball pastrami
                salami, rump short ribs filet mignon shankle short loin tongue leberkas venison cow
                frankfurter tri-tip alcatra. Sirloin beef cupim kielbasa landjaeger chuck. T-bone
                shank chicken leberkas, jerky pork tongue burgdoggen rump doner ribeye sirloin
                pastrami venison. Leberkas fatback tongue turkey.
              </TabPane>
              <TabPane tabId="2">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
              <TabPane tabId="3">
                T-bone jowl ribeye shoulder. Pig sausage landjaeger, drumstick biltong cupim strip
                steak picanha frankfurter. Meatball venison kielbasa pork chop corned beef t-bone
                capicola jowl brisket filet mignon. Salami alcatra sirloin bacon fatback pork pork
                loin strip steak. Short loin pig jerky ham andouille ground round short ribs ham
                hock prosciutto kielbasa kevin. Turducken picanha turkey, filet mignon rump kielbasa
                hamburger pork belly salami bresaola burgdoggen.
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
