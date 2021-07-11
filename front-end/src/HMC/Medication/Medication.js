import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';

class Medication extends Component {
  render() {
    return (
      <Aux>
        <Card className='card-border-c-blue'>
          <Card.Header>
            <h3 className='align-items-center'> Medication Name</h3>
          </Card.Header>
          <Card.Body className='card-task'>
            <Card.Text className='task-detail h6 '>
              Take 1 tablet (2.5mg total) by mouth daily
            </Card.Text>
            <Card.Body>
              <Card.Text className='task-due'>
                <h5>Precription Details</h5>
                <strong> Prescribed : </strong>
                <strong className='label label-primary'>March 16, 2021</strong>
                <br />
                <strong> Approved by : </strong>
                <strong className='text-primary'>Dr. Thomas</strong>
              </Card.Text>
              <Card.Text className='task-due'>
                <h5>Refill Details</h5>
                <strong> Quantity : </strong>
                <strong className='label label-primary'>90 days</strong>
              </Card.Text>
              <Card.Text className='task-due'>
                <h5>Pharmacy Details</h5>
                <strong> CVS Pharmacy 123 Main St, Boston, MA, 12345 </strong>
              </Card.Text>
            </Card.Body>

            <hr />
            <Button className='btn btn-outline-primary'>
              <i className='feather icon-edit' />
              Edit Medication
            </Button>
            <Button className='btn btn-outline-danger float-right'>
              <i className='feather icon-trash-2' />
              Remove
            </Button>
          </Card.Body>
        </Card>
      </Aux>
    );
  }
}

export default Medication;
