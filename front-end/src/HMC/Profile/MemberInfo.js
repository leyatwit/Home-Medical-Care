import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Card, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../../assets/scss/style.scss';
import Aux from '../../hoc/_Aux';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import DEMO from '../../store/constant';

const MemberInfo = ({ getProfileById, profile: { profile }, auth, match }) => {
  useEffect(() => {
    console.log('match', match);
    // getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  var memberProfile = profile ? profile : {};
  var currentUser =
    memberProfile && memberProfile.user ? memberProfile.user : {};
  var age = moment().diff(memberProfile.birthday, 'years');
  var height = memberProfile.heightFeet + "'" + memberProfile.heightInch + "''";
  var weight = memberProfile.weight + ' lb';
  var avartar = memberProfile.gender === 'female' ? avatar1 : avatar2;

  return (
    <Card className='loction-user'>
      <Card.Header>
        <Card.Title as='h5'>Personal Information</Card.Title>
      </Card.Header>
      <Card.Body className='p-0'>
        <div className='text-center project-main'>
          <img
            className='img-fluid rounded-circle'
            src={avartar}
            alt='dashboard-user'
          />
          <br />
          <Badge variant='primary'>Member Profile</Badge>
          <h5 className='mt-4'>{memberProfile.name}</h5>

          <div className='row card-active  text-center'>
            <div className='col-md-3 col-6'>
              <h4>{age}</h4>
              <span className='text-muted'>Age</span>
            </div>
            <div className='col-md-3 col-6'>
              <h4>{weight}</h4>
              <span className='text-muted'>Weight</span>
            </div>
            <div className='col-md-3 col-6'>
              <h4>{height}</h4>
              <span className='text-muted'>Height</span>
            </div>
            <div className='col-md-3 col-12'>
              <h4>{memberProfile.bmi}</h4>
              <span className='text-muted'>IBM</span>
            </div>
          </div>
          {/* <a href={DEMO.BLANK_LINK} className="btn theme-bg text-uppercase text-white "><i className="feather icon-edit f-20 text-white"/>Edit Profile</a> */}
          <Button
            className='btn theme-bg text-uppercase text-white '
            href='/edit-profile'
          >
            {' '}
            <i className='feather icon-edit f-20 text-white' />
            Edit Profile
          </Button>
          <Button
            className='btn theme-bg text-uppercase text-white '
            href='/profile'
          >
            {' '}
            <i className='feather icon-heart f-20 text-white' />
            Primary Profile
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
MemberInfo.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps, { getProfileById })(MemberInfo);
