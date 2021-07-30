import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Aux from '../../hoc/_Aux';
import { Row, Col, Form, Card, FormControl } from 'react-bootstrap';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
// export const relationshipOptions = [
//   { value: 'self', label: 'Self' },
//   { value: 'father', label: 'Father' },
//   { value: 'mother', label: 'Husband' },
//   { value: 'wife', label: 'Wife' },
//   { value: 'sister', label: 'Sister' },
//   { value: 'brother', label: 'Brother' },
//   { value: 'son', label: 'Son' },
//   { value: 'daughter', label: 'Daughter' }
// ];
// export const genderOptions = [
//   { value: 'female', label: 'Female' },
//   { value: 'male', label: 'Male' }
// ];
const initialState = {
  gender: '',
  weight: '',
  height: '',
  isSelf: false,
  relationship: ''
};

const NewProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  //   const creatingProfile = useRouteMatch('/create-profile');

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { gender, weight, height, relationship, isSelf } = formData;

  const onChange = (e) => {
    const target = e.target;
    console.log(target);
    if (target.id === 'relationship' && target.value === 'Self') {
      this.initailState.isSelf = true;
    }

    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Aux>
      <h2 className='large text-primary text-center m-4'>
        {/* {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'} */}
        Create Your Profile
      </h2>
      <Row>
        <Col></Col>
        <Col>
          <Card className='p-5'>
            <Card.Header>
              <Card.Title as='h5'>Personal Information</Card.Title>
            </Card.Header>
            <Card.Body className='p-0'>
              <div className='text-center project-main'>
                <img
                  className='img-fluid rounded-circle'
                  src={avatar2}
                  alt='dashboard-user'
                />
              </div>
              <Form className='form' onSubmit={onSubmit}>
                <Form.Group controlId='relationship'>
                  <Form.Label>Relationship</Form.Label>
                  {/* <Select
                    name='relationship'
                    value={relationship}
                    onChange={onChange}
                    options={relationshipOptions}
                  /> */}
                  {/* <Form.Group controlId='formBasicChecbox'>
                    <Form.Check
                      type='checkbox'
                      name='isSelf '
                      label='This is myself'
                    />
                  </Form.Group> */}
                  <FormControl
                    as='select'
                    name='relationship'
                    value={relationship}
                    onChange={onChange}
                  >
                    <option>Select Relationship</option>
                    <option value='self'>Self</option>
                    <option value='father'>Father</option>
                    <option value='mother'>Mother</option>
                    <option value='wife'>Wife</option>
                    <option value='sister'>Sister</option>
                    <option value='brother'>Brother</option>
                    <option value='son'>Son</option>
                    <option value='daughter'>Daughter</option>
                  </FormControl>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <FormControl
                    as='select'
                    name='gender'
                    value={gender}
                    onChange={onChange}
                  >
                    <option>Select Gender</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                  </FormControl>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Weight</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Weight'
                    name='weight'
                    value={weight}
                    onChange={onChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Height</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Height'
                    name='height'
                    value={height}
                    onChange={onChange}
                  />
                </Form.Group>

                <Form.Control type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/home'>
                  Go Back
                </Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Aux>
  );
};

NewProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  NewProfile
);
