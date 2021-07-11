import React, { Component } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import Datetime from 'react-datetime';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
class MedicalTest extends Component {
  render() {
    return (
      <Aux>
        <Row className='row-eq-height'>
          <Col sm={12} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title as='h5'>Required Home Test</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className='text-center m-b-30'>
                  <img
                    className='img-fluid rounded-circle'
                    src={avatar2}
                    alt='dashboard-user'
                  />
                  <h3 className='mt-3'>Test User</h3>
                </div>

                <ul className='task-list'>
                  <li>
                    <i className='task-icon bg-c-green' />
                    <h6>
                      Cholesterol Testing
                      <span className='float-right text-muted'>Monthly</span>
                    </h6>
                    <p className='text-muted'>Lorem ipsum is dolorem…</p>
                  </li>
                  <li>
                    <i className='task-icon bg-c-green' />
                    <h6>
                      Blood Pressure Monitor
                      <span className='float-right text-muted'>Daily</span>
                    </h6>
                    <p className='text-muted'>Lorem ipsum is dolorem…</p>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title as='h5'>Add Medical Test</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Test Type</Form.Label>
                    <Form.Control as='select'>
                      <option>Cholesterol Testing</option>
                      <option>Blood Pressure Monitor</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Medical Testing Description</Form.Label>
                    <Form.Control as='textarea' rows='5' />
                  </Form.Group>
                  <Form.Label as='h5'>Repeat</Form.Label>
                  <Form.Group>
                    <Form.Label>Start</Form.Label>
                    <Datetime
                      dateFormat='dddd D MMMM Y -'
                      inputProps={{ placeholder: 'Select Date & Time' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control as='select'>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>End</Form.Label>
                    <Datetime
                      dateFormat='dddd D MMMM Y -'
                      inputProps={{ placeholder: 'Select Date & Time' }}
                    />
                  </Form.Group>
                  {/* <Form.Group>    
                                <Form.Check
                                                custom
                                                required
                                                type="checkbox"
                                                id="supported-checkbox"
                                                label="Need reminder"
                                                onChange={() => this.setState(prevState => { return {reminder: !prevState.reminder}})}
                                            />
                            </Form.Group> */}

                  <Button variant='primary'>Submit</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default MedicalTest;
