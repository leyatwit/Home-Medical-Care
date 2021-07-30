import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Newprofile from '../Profile-Form/ProfileForm';
import { Row, Col } from 'react-bootstrap';
import Spinner from '../../App/layout/Spinner';
// import DashboardActions from './DashboardActions';
// import Experience from './Experience';
// import Education from './Education';
import { getCurrentProfile } from '../../actions/profile';
import UpcomingAppointment from './UpcomingAppointment';
import MedicationReminder from './MedicationReminder';
import PersonalData from './PersonalData';
import Virtualization from './Virtualization';
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  // return (
  //   // <Fragment>{profile !== null ? <Dashboard /> : <Newprofile />}</Fragment>
  //   <Fragment>Home</Fragment>
  // );
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Row>
      {/* UPCOMING APPOINTMENT */}
      <Col md={6} xl={6}>
        <UpcomingAppointment appointment={profile.appointment} />
      </Col>
      {/* MEDICATION REMINDER */}
      <Col md={6} xl={6}>
        <MedicationReminder />
      </Col>

      {/* PROFILE DATA */}
      <Col md={6} xl={6}>
        <PersonalData />
      </Col>
      {/* VIRTUALIZATION */}
      <Col md={6} xl={6}>
        <Virtualization />
      </Col>
    </Row>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
