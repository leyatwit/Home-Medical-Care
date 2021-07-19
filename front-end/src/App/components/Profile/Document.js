import React from 'react';
import {
  Card,
  Col,
  Row,
  Table,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import '../../../assets/scss/style.scss';
import DEMO from '../../../store/constant';
import Datetime from 'react-datetime';

class Document extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <Card.Title as='h5'>
            {' '}
            Document
            {/* <a href={DEMO.BLANK_LINK} className="btn theme-bg text-uppercase text-white float-right"><i className="feather icon-user-plus f-20 text-white"/>Add Member</a> */}
          </Card.Title>
        </Card.Header>
        <Card.Body className=''>
          <Row>
            <Col xl={6}>
              <Table responsive className='table-styling'>
                <thead className='table-info'>
                  <tr>
                    <th>File Name</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>insurance.pdf</td>
                    <td>Insurance</td>
                    <td>06/28/2021</td>
                  </tr>
                  <tr>
                    <td>vaccinecard.pdf</td>
                    <td>Imunization</td>
                    <td>05/23/2021</td>
                  </tr>
                  <tr>
                    <td>lab_result.pdf</td>
                    <td>Lab Test</td>
                    <td>05/24/2021</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col xl={6}>
              <Form>
                <InputGroup className='mb-3'>
                  <DropdownButton
                    as={InputGroup.Prepend}
                    title='Document Type'
                    id='input-group-dropdown-1'
                  >
                    <Dropdown.Item href='#'>Insurance Card</Dropdown.Item>
                    <Dropdown.Item href='#'>Immunization Record</Dropdown.Item>
                    <Dropdown.Item href='#'>Vision Prescription</Dropdown.Item>
                    <Dropdown.Item href='#'>Hospital Bill</Dropdown.Item>
                  </DropdownButton>
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
                </InputGroup>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <Datetime inputProps={{ placeholder: 'Select Date' }} />
                </Form.Group>

                <a
                  href={DEMO.BLANK_LINK}
                  className='btn theme-bg text-uppercase text-white float-right'
                >
                  <i className='feather icon-user-plus f-20 text-white' />
                  Upload Document
                </a>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default Document;
