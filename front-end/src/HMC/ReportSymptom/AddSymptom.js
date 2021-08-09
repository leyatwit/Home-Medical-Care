import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
// import DropzoneComponent from 'react-dropzone-component';
import Datetime from 'react-datetime';
import CreatableSelect from 'react-select/creatable';
import Aux from '../../hoc/_Aux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSymptom } from '../../actions/profile';
import MultipleImageUploadComponent from './MultipleImageUploadComponent';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bodyOptions = [
  { value: 'head', label: 'Head', color: '#00B8D9' },
  { value: 'skin', label: 'Skin', color: '#0052CC' },
  { value: 'arm', label: 'Arms', color: '#5243AA' },
  { value: 'leg', label: 'Legs', color: '#FF5630' }
];
const symptomOptions = [
  { value: 'abdominalCramps', label: 'Abdominal Cramps' },
  { value: 'acne', label: 'Acne' },
  { value: 'appetiteChanges', label: 'Appetite Changes' },
  { value: 'bladderIncontinence', label: 'Bladder Incontinence' },
  { value: 'bloating', label: 'Bladder Incontinence' },
  { value: 'skin_rash', label: 'Skin Rash' },
  { value: 'chill ', label: 'Chill' },
  { value: 'acidity', label: 'Acidity' },
  { value: 'vomiting', label: 'Vomiting' },
  { value: 'fatigue', label: 'Fatigue' },
  { value: 'nausea', label: 'Nausea' },
  { value: 'diarrhoea', label: 'Diarrhoea' },
  { value: 'cramps', label: 'Cramps' },
  { value: 'bruising', label: 'Bruising' },
  { value: 'depression', label: 'Depression' },
  { value: 'scurring', label: 'Scurring' }
];
const AddSymptom = ({ addSymptom, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    partOfBody: '',
    description: '',
    date: '',
    filename: ''
  });
  const { name, partOfBody, description, date, filename } = formData;
  const fileObj = [];
  var fileArray = [];
  const onChange = (e) => {
    // console.log(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleDate = (e) => {
    setFormData({
      ...formData,
      date: e.format('YYYY-MM-DD')
    });
  };
  const handleName = (e) => {
    setFormData({
      ...formData,
      name: e.value
    });
  };
  var parts = [];
  const handlePartOfBody = (e) => {
    setFormData({
      ...formData,
      partOfBody: parts.append(e.value)
    });
  };
  const handleChange = (newValue, actionMeta) => {
    setFormData({
      ...formData,
      partOfBody: newValue.map((v) => v.value)
    });
  };
  const handleFile = (files) => {
    console.log('child data:', files);
    setFormData({
      ...formData,
      filename: files
    });
  };
  const onChangeHandler = (event) => {
    fileObj.push(event.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(fileObj[0][i].name);
    }

    formData.filename = fileArray;
  };
  const onClickHandler = () => {
    const data = new FormData();
    console.log('fileObj:', fileObj);
    for (var x = 0; x < fileObj[0].length; x++) {
      data.append('file', fileObj[0][x]);
    }
    console.log('data', data);
    axios
      .post('http://192.168.1.185:5000/upload', data)
      .then((res) => {
        //add symptom
        addSymptom(formData, history);
        // then print response status
        toast.success('upload success');
      })
      .catch((err) => {
        // then print response status
        toast.error('upload fail');
      });
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title as='h5'>Report Symptoms</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Symptoms Name</Form.Label>
            <Select
              className='basic-single'
              classNamePrefix='select'
              defaultValue={symptomOptions[0]}
              // value={name}
              onChange={handleName}
              options={symptomOptions}
              isClearable
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Which part of your body?</Form.Label>
            <CreatableSelect
              isMulti
              options={bodyOptions}
              // value={partOfBody}
              onChange={handleChange}
              pageSize={3}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Symptoms Description</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              name='description'
              value={description}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Datetime
              timeFormat={false}
              onChange={handleDate}
              inputProps={{ placeholder: 'Select Date' }}
            />
          </Form.Group>
          {/* <Form.Group>
            <Form.Label>Photo</Form.Label>
            <MultipleImageUploadComponent handleFile={handleFile} />
          </Form.Group> */}
          <Form.Group>
            <Form.Label>Photo</Form.Label>
            <div className='form-group multi-preview'>
              {(fileArray || []).map((url) => (
                <img
                  src={url}
                  className='img-thumbnail'
                  style={{ width: '100px', height: '100px' }}
                  alt='...'
                />
              ))}
            </div>
            <Form.Control
              type='file'
              name='filename'
              onChange={onChangeHandler}
              multiple
            />
            <ToastContainer />
            <button
              type='button'
              class='btn btn-success btn-block mt-3'
              onClick={onClickHandler}
            >
              Add Symptom
            </button>
          </Form.Group>
          {/* <InputGroup className='mb-3'>
            <InputGroup.Prepend>
              <InputGroup.Text>Upload Photo</InputGroup.Text>
            </InputGroup.Prepend>
            <div className='custom-file'>
              <Form.Control
                type='file'
                className='custom-file-input'
                id='validatedCustomFile1'
                name='filename'
                value={filename}
                onChange={onChange}
              />
              <Form.Label
                className='custom-file-label'
                htmlFor='validatedCustomFile1'
              >
                Choose file
              </Form.Label>
            </div>
          </InputGroup> */}
        </Form>
      </Card.Body>

      {/* <Card.Body className='calendar'>
                                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                            </Card.Body> */}
    </Card>
  );
};
AddSymptom.propTypes = {
  addSymptom: PropTypes.func.isRequired
};

export default connect(null, { addSymptom })(AddSymptom);
