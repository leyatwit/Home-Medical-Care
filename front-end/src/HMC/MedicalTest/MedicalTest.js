import React, { useEffect } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Aux from '../../hoc/_Aux';
import Datetime from 'react-datetime';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import AddMedicalTest from './AddMedicalTest';
import { getCurrentProfile, deleteMedicalTest } from '../../actions/profile';
const MedicalTest = ({
  getCurrentProfile,
  deleteMedicalTest,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  var medTest = profile && profile.medicalTest ? profile.medicalTest : [];
  const medTests = medTest.map((test) => (
    <li>
      <i className='task-icon bg-c-green' />
      <h6>
        <strong className='h5 text-primary my-5'>{test.type}</strong>
        <br />
        <span className='text-muted mt-5'>{test.frequency}</span>
        <Button
          className=' m-2 float-right btn-icon btn-rounded btn-danger'
          onClick={() => deleteMedicalTest(test._id)}
        >
          <i className='feather icon-trash f-20 text-white' />
        </Button>
      </h6>
      <p className='text-muted'>{test.instruction}</p>
    </li>
  ));
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
                <h3 className='mt-3'>{user && user.name}</h3>
              </div>

              <ul className='task-list'>{medTests}</ul>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} xl={6}>
          <AddMedicalTest />
        </Col>
      </Row>
    </Aux>
  );
};
MedicalTest.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteMedicalTest: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteMedicalTest
})(MedicalTest);
