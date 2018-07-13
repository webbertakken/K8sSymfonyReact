import React, { Component } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Simple Table
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Phone number</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>320-220-0686</td>
                      <td>Member</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Bott Lowhiner</td>
                      <td>211-221-6616</td>
                      <td>H4xx0r1!one</td>
                      <td>
                        <Badge color="danger">Banned</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Hank Moozy</td>
                      <td>651-267-1844</td>
                      <td>Admin</td>
                      <td>
                        <Badge color="secondary">Inactive</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Noice Doode</td>
                      <td>317-555-0122</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="warning">Pending</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Spider man</td>
                      <td>218-204-6370</td>
                      <td>Staff</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous href="#" />
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#" />
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Striped Table
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>320-220-0686</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Bott Lowhiner</td>
                    <td>211-221-6616</td>
                    <td>H4xx0r1!one</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hank Moozy</td>
                    <td>651-267-1844</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Noice Doode</td>
                    <td>317-555-0122</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Spider man</td>
                    <td>218-204-6370</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem disabled><PaginationLink
                    previous
                    href="#"
                  >Prev
                  </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink
                    next
                    href="#"
                  >Next
                  </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Condensed Table
              </CardHeader>
              <CardBody>
                <Table responsive size="sm">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>320-220-0686</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Bott Lowhiner</td>
                    <td>211-221-6616</td>
                    <td>H4xx0r1!one</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hank Moozy</td>
                    <td>651-267-1844</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Noice Doode</td>
                    <td>317-555-0122</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Spider man</td>
                    <td>218-204-6370</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink
                    previous
                    href="#"
                  >Prev
                  </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink
                    next
                    href="#"
                  >Next
                  </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Bordered Table
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>320-220-0686</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Bott Lowhiner</td>
                    <td>211-221-6616</td>
                    <td>H4xx0r1!one</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hank Moozy</td>
                    <td>651-267-1844</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Noice Doode</td>
                    <td>317-555-0122</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Spider man</td>
                    <td>218-204-6370</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink
                    previous
                    href="#"
                  >Prev
                  </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink href="#">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink
                    next
                    href="#"
                  >Next
                  </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify" /> Combined All Table
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>320-220-0686</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Bott Lowhiner</td>
                    <td>211-221-6616</td>
                    <td>H4xx0r1!one</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Hank Moozy</td>
                    <td>651-267-1844</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Noice Doode</td>
                    <td>317-555-0122</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Spider man</td>
                    <td>218-204-6370</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink
                      previous
                      href="#"
                    >Prev
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink
                      next
                      href="#"
                    >Next
                    </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
