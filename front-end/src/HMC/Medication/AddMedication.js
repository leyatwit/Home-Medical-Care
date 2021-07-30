import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Form, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMedication } from '../../actions/profile';

const AddMedication = ({ addMedication, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    instruction: '',
    approvedBy: '',
    prescribed: '',
    quanity: '',
    phamacy: '',
    timesADay: '',
    dosage: ''
  });
  const {
    name,
    instruction,
    approvedBy,
    prescribed,
    quanity,
    phamacy,
    timesADay,
    dosage
  } = formData;

  const onChange = (e) => {
    // console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleDate = (e) => {
    setFormData({
      ...formData,
      prescribed: e.format('YYYY-MM-DD')
    });
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as='h5'>New Medication</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addMedication(formData, history);
          }}
        >
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={name}
              onChange={onChange}
            />
            <Form.Label>Dosage</Form.Label>
            <Form.Control
              type='text'
              name='dosage'
              value={dosage}
              onChange={onChange}
            />
            <Form.Label>Type</Form.Label>
            <Form.Control
              as='select'
              name='timesADay'
              value={timesADay}
              onChange={onChange}
            >
              <option value='Morning'>Morning</option>
              <option value='Afternoon'>Afternoon</option>
              <option value='Evening'>Evening</option>
            </Form.Control>
            <Form.Label>Instruction</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              name='instruction'
              value={instruction}
              onChange={onChange}
            />
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
                      onChange={handleDate}
                      inputProps={{ placeholder: 'Select Date' }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Approved by</Form.Label>
                    <Form.Control
                      type='text'
                      name='approvedBy'
                      value={approvedBy}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type='text'
                      name='quanity'
                      value={quanity}
                      onChange={onChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pharmacy address</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows='3'
                      name='phamacy'
                      value={phamacy}
                      onChange={onChange}
                    />
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

          <Button type='submit' variant='primary'>
            Add Medication
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

AddMedication.propTypes = {
  addMedication: PropTypes.func.isRequired
};

export default connect(null, { addMedication })(AddMedication);
