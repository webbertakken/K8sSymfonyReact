import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleLarge = this.toggleLarge.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleSmall() {
    this.setState({
      small: !this.state.small,
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Bootstrap Modals
              </CardHeader>
              <CardBody>
                <Button onClick={this.toggle}>Launch demo modal</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className={this.props.className}
                >
                  <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button onClick={this.toggleLarge}>Launch large modal</Button>
                <Modal
                  isOpen={this.state.large}
                  toggle={this.toggleLarge}
                  className={`modal-lg ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleLarge}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleLarge}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button onClick={this.toggleSmall}>Launch small modal</Button>
                <Modal
                  isOpen={this.state.small}
                  toggle={this.toggleSmall}
                  className={`modal-sm ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleSmall}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleSmall}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleSmall}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <hr />

                <Button color="primary" onClick={this.togglePrimary}>Primary modal</Button>
                <Modal
                  isOpen={this.state.primary}
                  toggle={this.togglePrimary}
                  className={`modal-primary ${this.props.className}`}
                >
                  <ModalHeader toggle={this.togglePrimary}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.togglePrimary}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="success" onClick={this.toggleSuccess}>Success modal</Button>
                <Modal
                  isOpen={this.state.success}
                  toggle={this.toggleSuccess}
                  className={`modal-success ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="warning" onClick={this.toggleWarning}>Warning modal</Button>
                <Modal
                  isOpen={this.state.warning}
                  toggle={this.toggleWarning}
                  className={`modal-warning ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleWarning}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="warning" onClick={this.toggleWarning}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleWarning}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="danger" onClick={this.toggleDanger}>Danger modal</Button>
                <Modal
                  isOpen={this.state.danger}
                  toggle={this.toggleDanger}
                  className={`modal-danger ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleDanger}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={this.toggleDanger}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                <Button color="info" onClick={this.toggleInfo}>Info modal</Button>
                <Modal
                  isOpen={this.state.info}
                  toggle={this.toggleInfo}
                  className={`modal-info ${this.props.className}`}
                >
                  <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
                  <ModalBody>
                    Turducken strip steak spare ribs hamburger rump drumstick prosciutto venison
                    alcatra porchetta shankle shank. Alcatra ground round buffalo pancetta. Sirloin
                    sausage shank, rump turducken porchetta filet mignon turkey andouille kevin ball
                    tip. Drumstick rump pork chop andouille, ham flank prosciutto. Pork loin beef
                    ham hock, spare ribs tenderloin porchetta chicken shankle shoulder ground round
                    strip steak. Leberkas turkey short ribs, burgdoggen pancetta turducken beef pork
                    loin kielbasa ribeye. Filet mignon shoulder andouille buffalo sausage shank
                    corned beef ball tip.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                  </ModalFooter>
                </Modal>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Modals;
