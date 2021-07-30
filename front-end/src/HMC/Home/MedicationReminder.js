import React from 'react';
import { Col, Card, Tab, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { addMedication } from '../../actions/profile';
import formatDate from '../../utils/formatDate';
import DEMO from '../../store/constant';
const MedicationReminder = ({}) => {
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
      <Card.Header>
        <Card.Title as='h5'>Medication Reminder</Card.Title>
      </Card.Header>
      <Card.Body className='border-bottom'>
        <div className='row d-flex align-items-center'>
          <div className='col-auto'>
            <i className='feather icon-sun f-40 text-c-green' />
          </div>
          <div className='col'>
            <h3 className='f-w-300'>Acetaminophen</h3>
            <span className='d-block text-muted'>1 pill</span>
          </div>
        </div>
        <div className='row d-flex align-items-center'>
          <div className='col-auto'>
            <i className='feather icon-cloud f-40 text-c-green' />
          </div>
          <div className='col'>
            <h3 className='f-w-300'>Atorvastatin</h3>
            <span className='d-block text-muted'>1 pill</span>
          </div>
        </div>
        <div className='row d-flex align-items-center'>
          <div className='col-auto'>
            <i className='feather icon-moon f-40 text-c-green' />
          </div>
          <div className='col'>
            <h3 className='f-w-300'>Januvia</h3>
            <span className='d-block text-muted'>2 pills</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

MedicationReminder.propTypes = {
  medication: PropTypes.array.isRequired,
  addMedication: PropTypes.func.isRequired
};

export default connect(null, {})(MedicationReminder);
