import React, { Component } from 'react';
import { Row, Col, Card, Form, Button, Accordion } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import Medication from './Medication';
import Datetime from 'react-datetime';

class Prescription extends Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col xl={4}>
            <Card>
              <Card.Header>
                <Card.Title as='h5'>New Medication</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control as='input'></Form.Control>
                    <Form.Label>Instruction</Form.Label>
                    <Form.Control as='textarea' rows='5' />
                  </Form.Group>
                  <Accordion defaultActiveKey='0'>
                    <Card className='border'>
                      <Accordion.Toggle as={Card.Header} eventKey='0'>
                        <i className='feather icon-clipboard mr-2' />
                        Medication Details
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                          <Form.Group>
                            <Form.Label>Prescribed</Form.Label>
                            <Datetime
                              timeFormat={false}
                              inputProps={{ placeholder: 'Select Date' }}
                            />
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Approved by</Form.Label>
                            <Form.Control as='input'></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control as='input'></Form.Control>
                          </Form.Group>
                          <Form.Group>
                            <Form.Label>Pharmacy address</Form.Label>
                            <Form.Control as='textarea' rows='3' />
                          </Form.Group>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className='border'>
                      <Accordion.Toggle as={Card.Header} eventKey='1'>
                        <i className='feather icon-bell mr-2' />
                        Set Reminder
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                          <Form.Group>
                            <Form.Label>Reminder Time</Form.Label>
                            <Datetime
                              dateFormat={false}
                              inputProps={{ placeholder: 'Select Time' }}
                            />
                          </Form.Group>

                          <Form.Group>
                            <Form.Label>Times a Day</Form.Label>
                            <Form.Control as='select'>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </Form.Control>
                          </Form.Group>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>

                  <hr />

                  <Button variant='primary'>Add Medication</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={8}>
            <Card>
              <Card.Header>
                <Card.Title as='h5'>Medications</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Medication />
                  </Col>
                  <Col md={6}>
                    <Medication />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default Prescription;
