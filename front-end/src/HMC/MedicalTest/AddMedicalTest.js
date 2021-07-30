import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Form, Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addMedicalTest } from '../../actions/profile';

const AddMedicalTest = ({ addMedicalTest, history }) => {
  const [formData, setFormData] = useState({
    type: '',
    instruction: '',
    frequency: '',
    startDate: '',
    endDate: ''
  });
  const { type, instruction, frequency, startDate, endDate } = formData;

  const onChange = (e) => {
    // console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleStart = (e) => {
    setFormData({
      ...formData,
      startDate: e.format('YYYY-MM-DD')
    });
  };
  const handleEnd = (e) => {
    setFormData({
      ...formData,
      endDate: e.format('YYYY-MM-DD')
    });
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as='h5'>Add Medical Test</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addMedicalTest(formData, history);
          }}
        >
          <Form.Group>
            <Form.Label>Test Type</Form.Label>
            <Form.Control
              as='select'
              name='type'
              value={type}
              onChange={onChange}
            >
              <option value='Cholesterol Testing'>Cholesterol Testing</option>
              <option value='Blood Pressure Monitor'>
                Blood Pressure Monitor
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Medical Testing Instruction</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              name='instruction'
              value={instruction}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Label as='h5'>Repeat</Form.Label>
          <Form.Group>
            <Form.Label>Start</Form.Label>
            <Datetime
              timeFormat={false}
              onChange={handleStart}
              inputProps={{ placeholder: 'Select Start Date' }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as='select'
              name='frequency'
              value={frequency}
              onChange={onChange}
            >
              <option value='Daily'>Daily</option>
              <option value='Weekly'>Weekly</option>
              <option value='Monthly'>Monthly</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>End</Form.Label>
            <Datetime
              timeFormat={false}
              onChange={handleEnd}
              inputProps={{ placeholder: 'Select End Date' }}
            />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Add Medication Test
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

AddMedicalTest.propTypes = {
  addMedicalTest: PropTypes.func.isRequired
};

export default connect(null, { addMedicalTest })(AddMedicalTest);
