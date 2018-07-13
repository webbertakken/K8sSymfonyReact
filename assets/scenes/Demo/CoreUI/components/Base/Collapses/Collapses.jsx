import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Collapse, Fade } from 'reactstrap';

class Collapses extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /><strong>Collapse</strong>
            <div className="card-actions">
              <a
                href="https://reactstrap.github.io/components/collapse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <Collapse
            isOpen={this.state.collapse}
            onEntering={this.onEntering}
            onEntered={this.onEntered}
            onExiting={this.onExiting}
            onExited={this.onExited}
          >
            <CardBody>
              <p>
                Bacon ipsum dolor amet pork chop buffalo boudin tenderloin shank ham. Jerky
                turducken leberkas shoulder. Flank pork chop beef ribs ball tip kielbasa spare ribs.
                Strip steak ribeye leberkas porchetta.
              </p>
              <p>
                Pork belly cow cupim, bresaola ribeye jowl drumstick swine beef. Chicken jerky
                swine, strip steak ground round ball tip picanha flank meatball ham hock shoulder.
                Venison short ribs swine meatloaf pork pork belly ham hock fatback beef turducken
                rump capicola ribeye shank.

                Ball tip pork jowl andouille, cow boudin cupim picanha t-bone fatback frankfurter
                ham. Andouille bresaola beef pork loin frankfurter chicken kielbasa tongue. Boudin
                alcatra ham fatback meatloaf chuck pig t-bone biltong pork meatball cupim ham hock.
                Ball tip buffalo pork belly burgdoggen jowl tri-tip turkey leberkas t-bone pork
                picanha chuck biltong cow. Capicola flank picanha shankle ground round. Ground round
                short ribs alcatra, pig pork belly tongue ham hock.
              </p>
            </CardBody>
          </Collapse>
          <CardFooter>
            <Button
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: '1rem' }}
            >Toggle
            </Button>
            <h5>Current state: {this.state.status}</h5>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify" /><strong>Fade</strong>
            <div className="card-actions">
              <a
                href="https://reactstrap.github.io/components/fade/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <Fade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
              This content will fade in and out as the button is pressed...
            </Fade>
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={this.toggleFade}>Toggle Fade</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Collapses;
