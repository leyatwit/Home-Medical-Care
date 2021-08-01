import React, { useEffect } from 'react';
import { Row, Col, Card, Form, Button, Accordion } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Aux from '../../hoc/_Aux';
import Datetime from 'react-datetime';
import AddMedication from './AddMedication';
import moment from 'moment';
import {
  getCurrentProfile,
  deleteMedication,
  updateMedication
} from '../../actions/profile';

const Medication = ({
  getCurrentProfile,
  deleteMedication,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  var medication = profile && profile.medication ? profile.medication : [];
  const medications = medication.map((med) => (
    <Col md={6}>
      <Card className='card-border-c-blue'>
        <Card.Header>
          <h3 className='align-items-center'> {med.name}</h3>
        </Card.Header>
        <Card.Body className='card-task'>
          <Card.Text className='task-detail h6 '>
            {/* Take 1 tablet (2.5mg total) by mouth daily */}
            {med.instruction}
          </Card.Text>
          <Card.Body>
            <Card.Text className='task-due'>
              <h5>Precription Details</h5>
              <strong> Prescribed : </strong>
              <strong className='label label-primary'>
                {moment.utc(med.prescribed).format('MM/DD/YYYY')}
              </strong>
              <br />
              <strong> Approved by : </strong>
              <strong className='text-primary'>{med.approvedBy}</strong>
            </Card.Text>
            <Card.Text className='task-due'>
              <h5>Refill Details</h5>
              <strong> Quantity : </strong>
              <strong className='label label-primary'>{med.quanity}</strong>
            </Card.Text>
            <Card.Text className='task-due'>
              <h5>Pharmacy Details</h5>
              <strong> {med.phamacy} </strong>
            </Card.Text>
          </Card.Body>

          <hr />
          <Button
            className='btn btn-outline-primary'
            onClick={() => updateMedication(med._id)}
          >
            <i className='feather icon-edit' />
            Edit Medication
          </Button>
          <Button
            className='btn btn-outline-danger float-right'
            onClick={() => deleteMedication(med._id)}
          >
            <i className='feather icon-trash-2' />
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));
  return (
    <Aux>
      <Row>
        <Col xl={4}>
          <AddMedication />
        </Col>
        <Col xl={8}>
          <Card>
            <Card.Header>
              <Card.Title as='h5'>Medications</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>{medications}</Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};
Medication.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteMedication: PropTypes.func.isRequired,
  updateMedication: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteMedication,
  updateMedication
})(Medication);
