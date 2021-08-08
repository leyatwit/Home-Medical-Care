import React, { useEffect } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import moment from 'moment';
const PersonalData = ({ auth: { user }, profile: { profile } }) => {
  //   const educations = education.map((edu) => (
  //     <tr key={edu._id}>
  //       <td>{edu.school}</td>
  //       <td className='hide-sm'>{edu.degree}</td>
  //       <td>
  //         {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
  //       </td>
  //       <td>
  //         <button
  //           onClick={() => deleteEducation(edu._id)}
  //           className='btn btn-danger'
  //         >
  //           Delete
  //         </button>
  //       </td>
  //     </tr>
  //   ));
  var avatar = profile.gender === 'female' ? avatar1 : avatar2;
  var medTest = profile && profile.medicalTest ? profile.medicalTest : [];
  const medTests = medTest.map((test) => (
    <li>
      <i className='task-icon bg-c-green' />
      <h6>
        {test.type}
        <span className='float-right text-muted'>{test.frequency}</span>
      </h6>
      <p className='text-muted'>{test.instruction}</p>
    </li>
  ));
  return (
    <Card>
      <Card.Body>
        <div className='text-center m-b-30'>
          <img
            className='img-fluid rounded-circle'
            src={avatar}
            alt='dashboard-user'
          />
          <h3 className='mt-5'> {profile.isSelf ? user.name : profile.name}</h3>
        </div>
        <div className='row card-active mb-5 text-center'>
          <div className='col-md-4 col-6'>
            <h4>110 lb</h4>
            <span className='text-muted'>Weight</span>
          </div>
          <div className='col-md-4 col-6'>
            <h4>5'4</h4>
            <span className='text-muted'>Height</span>
          </div>
          <div className='col-md-4 col-12'>
            <h4>20</h4>
            <span className='text-muted'>IBM</span>
          </div>
        </div>
        <ul className='task-list'>
          {medTest.length !== 0 ? (
            medTests
          ) : (
            <li>
              <span className='h4 text-muted alert  '>
                <i className=' m-2 feather icon-alert-triangle f-30' />
                You don't have any required medical test
              </span>
            </li>
          )}
        </ul>
      </Card.Body>
    </Card>
  );
};
PersonalData.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
// PersonalData.propTypes = {
//   data: PropTypes.array.isRequired,
//   editProfile: PropTypes.func.isRequired
// };
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});
export default connect(mapStateToProps)(PersonalData);
