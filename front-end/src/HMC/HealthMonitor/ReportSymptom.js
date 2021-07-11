import React from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
// import DropzoneComponent from 'react-dropzone-component';
// import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Aux from '../../hoc/_Aux';
import Select from 'react-select';
export const bodyOptions = [
  { value: 'head', label: 'Head', color: '#00B8D9' },
  { value: 'skin', label: 'Skin', color: '#0052CC' },
  { value: 'arm', label: 'Arms', color: '#5243AA' },
  { value: 'leg', label: 'Legs', color: '#FF5630' }
];
export const symptomOptions = [
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
class ReportSymptom extends React.Component {
  render() {
    return (
      <Aux>
        <Card>
          <Card.Header>
            <Card.Title as='h5'>Report Symptoms</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Symptoms Type</Form.Label>
              <Select
                className='basic-single'
                classNamePrefix='select'
                defaultValue={symptomOptions[0]}
                name='color'
                options={symptomOptions}
                isClearable
              />
            </Form.Group>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Which part of your body?</Form.Label>
              <CreatableSelect isMulti options={bodyOptions} pageSize={3} />
            </Form.Group>

            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Symptoms Description</Form.Label>
              <Form.Control as='textarea' rows='5' />
            </Form.Group>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='custom-addons5'>
                  Upload Photo
                </InputGroup.Text>
              </InputGroup.Prepend>
              <div className='custom-file'>
                <Form.Control
                  aria-describedby='custom-addons5'
                  type='file'
                  className='custom-file-input'
                  id='validatedCustomFile1'
                />
                <Form.Label
                  className='custom-file-label'
                  htmlFor='validatedCustomFile1'
                >
                  Choose file
                </Form.Label>
              </div>
            </InputGroup>
            <Button variant='primary'>Submit</Button>
          </Card.Body>

          {/* <Card.Body className='calendar'>
                                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                            </Card.Body> */}
        </Card>
      </Aux>
    );
  }
}

export default ReportSymptom;
