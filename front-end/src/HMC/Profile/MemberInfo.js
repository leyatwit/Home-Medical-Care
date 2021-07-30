import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Card, Row, Col, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import '../../assets/scss/style.scss';
import Aux from '../../hoc/_Aux';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import { connect } from 'react-redux';
import { getMemberProfiles } from '../../actions/profile';
import DEMO from '../../store/constant';

const MemberInfo = ({
  getMemberProfiles,
  memberProfile,
  profile: { profiles, loading }
}) => {
  var primaryID;
  var currentProfile = memberProfile ? memberProfile : {};
  var currentUser =
    memberProfile && memberProfile.user ? memberProfile.user : {};
  var age = moment().diff(currentProfile.birthday, 'years');
  var height =
    currentProfile.heightFeet + "'" + currentProfile.heightInch + "''";
  var weight = currentProfile.weight + ' lb';
  var avartar = currentProfile.gender === 'female' ? avatar1 : avatar2;
  console.log('Profile:', currentProfile);
  console.log('Profiles:', profiles);
  useEffect(() => {
    if (memberProfile) {
      primaryID = memberProfile.primaryProfile;
      getMemberProfiles(primaryID);
    }
  }, [getMemberProfiles, primaryID]);
  const members = profiles.map((mem) => (
    <a href={`/profile/${mem._id}`}>
      <img
        className='img-fluid media-object img-radius mr-3'
        src={mem.gender === 'female' ? avatar1 : avatar2}
        alt='1'
      />
    </a>
  ));
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
          <h5 className='mt-4'>{currentProfile.name}</h5>

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
              <h4>{currentProfile.bmi}</h4>
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

        <Card.Header>
          <Card.Title as='h5'>Family Member</Card.Title>
        </Card.Header>
        <div className='task-list-table text-center m-4'>
          {members}
          <a href='/add-member-profile'>
            <i className='fa fa-plus' />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
MemberInfo.propTypes = {
  getMemberProfiles: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  profiles: state.profile.profiles,
  profile: state.profile
});
export default connect(mapStateToProps, { getMemberProfiles })(MemberInfo);
