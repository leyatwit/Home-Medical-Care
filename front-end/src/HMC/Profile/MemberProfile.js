import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../assets/scss/style.scss';
import Aux from '../../hoc/_Aux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonalInfo from './PersonalInfo';
import FamilyMember from './FamilyMember';
import Measurement from './Measurement';
import Document from './Document';
import { getProfileById } from '../../actions/profile';
import { Spinner } from 'react-bootstrap';
import MemberInfo from './MemberInfo';
const MemberProfile = ({
  getProfileById,
  profile: { profile },
  auth,
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  console.log('member profile:', profile);
  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Aux>
          <Row className='container'>
            <Col sm={6}>
              <MemberInfo memberProfile={profile} />
            </Col>
            {/* <Col sm={4}>
          <FamilyMember />
        </Col> */}
            <Col sm={6}>
              <Document />
            </Col>
          </Row>
        </Aux>
      )}
    </Fragment>
  );
};
MemberProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileById })(MemberProfile);
