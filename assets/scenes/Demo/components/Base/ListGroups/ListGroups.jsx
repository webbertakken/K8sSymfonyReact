import React, { Component } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
} from 'reactstrap';

class ListGroups extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <div className="card-actions">
                  <a
                    href="https://reactstrap.github.io/components/listgroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem>Chuck capicola burgdoggen pastrami</ListGroupItem>
                  <ListGroupItem>Sirloin turducken, tri-tip</ListGroupItem>
                  <ListGroupItem>jowl t-bone andouille</ListGroupItem>
                  <ListGroupItem>tenderloin ham prosciutto</ListGroupItem>
                  <ListGroupItem>Sausage bresaola</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> tags</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="justify-content-between">
                    Tongue tenderloin
                    <Badge className="float-right" pill>
                      14
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    Buffalo pork
                    <Badge className="float-right" pill>
                      2
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem className="justify-content-between">
                    jowl t-bone andouille
                    <Badge className="float-right" pill color="warning">
                      1
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> disabled items</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem disabled tag="a" href="#">Tongue tenderloin</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Buffalo pork</ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#">jowl t-bone andouille</ListGroupItem>
                  <ListGroupItem tag="a" href="#">tenderloin ham prosciutto</ListGroupItem>
                  <ListGroupItem tag="a" href="#">Sausage bresaola</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> contextual classes</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem action color="success">Tongue tenderloin</ListGroupItem>
                  <ListGroupItem action color="info">Buffalo pork</ListGroupItem>
                  <ListGroupItem action color="warning">jowl t-bone andouille</ListGroupItem>
                  <ListGroupItem action color="danger">tenderloin ham prosciutto</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> anchors</small>
              </CardHeader>
              <CardBody>
                <p>Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.
                </p>
                <ListGroup>
                  <ListGroupItem active tag="a" href="#" action>Tongue tenderloin</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>Buffalo pork</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>jowl t-bone andouille</ListGroupItem>
                  <ListGroupItem tag="a" href="#" action>tenderloin ham prosciutto</ListGroupItem>
                  <ListGroupItem disabled tag="a" href="#" action>Sausage bresaola</ListGroupItem>
                </ListGroup>
                <p />
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> buttons</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem active tag="button" action>Tongue tenderloin</ListGroupItem>
                  <ListGroupItem tag="button" action>Buffalo pork</ListGroupItem>
                  <ListGroupItem tag="button" action>jowl t-bone andouille</ListGroupItem>
                  <ListGroupItem tag="button" action>tenderloin ham prosciutto</ListGroupItem>
                  <ListGroupItem disabled tag="button" action>Sausage bresaola</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /><strong>List Group</strong>
                <small> custom content</small>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem active action>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                      Chuck capicola burgdoggen pastrami sirloin turducken, tri-tip landjaeger beef
                      sausage picanha spare ribs hamburger ground round.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                      Chuck capicola burgdoggen pastrami sirloin turducken, tri-tip landjaeger beef
                      sausage picanha spare ribs hamburger ground round.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem action>
                    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                    <ListGroupItemText>
                      Chuck capicola burgdoggen pastrami sirloin turducken, tri-tip landjaeger beef
                      sausage picanha spare ribs hamburger ground round.
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListGroups;
