import React, { useEffect } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
const PersonalData = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
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

  return (
    <Card>
      <Card.Body>
        <div className='text-center m-b-30'>
          <img
            className='img-fluid rounded-circle'
            src={avatar2}
            alt='dashboard-user'
          />
          <h3 className='mt-3'> {profile.firstname}</h3>
        </div>
        <div className='row card-active mb-5'>
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
          <li>
            <i className='task-icon bg-c-green' />
            <h6>
              Cholesterol Testing
              <span className='float-right text-muted'>Monthly</span>
            </h6>
            <p className='text-muted'>Lorem ipsum is dolorem…</p>
          </li>
          <li>
            <i className='task-icon bg-c-green' />
            <h6>
              Blood Pressure Monitor
              <span className='float-right text-muted'>Daily</span>
            </h6>
            <p className='text-muted'>Lorem ipsum is dolorem…</p>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};
PersonalData.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
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
export default connect(mapStateToProps, { getCurrentProfile })(PersonalData);
