import React from 'react';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import '../../../assets/scss/style.scss';
import Aux from '../../../hoc/_Aux';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
class PersonalInfo extends React.Component {
  state = {
    gender: 'f',
    isBasic: false,
    isVertically: false,
    isTooltip: false,
    isGrid: false,
    isScrolling: false,
    isLarge: false,
    title: ''
  };

  render() {
    return (
      <Aux>
        <Card className='loction-user'>
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
              <h5 className='mt-4'>Test User</h5>
              <h6 className='text-muted'>Self</h6>
              {/* <a href={DEMO.BLANK_LINK} className="btn theme-bg text-uppercase text-white "><i className="feather icon-edit f-20 text-white"/>Edit Profile</a> */}
              <Button
                className='btn theme-bg text-uppercase text-white '
                onClick={() =>
                  this.setState({
                    isVarying: true,
                    title: 'Personal Information'
                  })
                }
              >
                {' '}
                <i className='feather icon-edit f-20 text-white' />
                Edit Profile
              </Button>
            </div>
            <div className='border-top m-0' />
            <div className='loction-progress'>
              <h5 className='f-w-300 mt-0 ml-5'>
                Name:{' '}
                <span className='float-right mr-5 f-w-500'>Test User</span>
              </h5>
              <h5 className='f-w-300 mt-3 ml-5'>
                Relationship:{' '}
                <span className='float-right mr-5 f-w-500'>Self</span>
              </h5>
              <h5 className='f-w-300 mt-3 ml-5'>
                DOB:
                <span className='float-right mr-5 f-w-500'>March 26, 2000</span>
              </h5>
              <h5 className='f-w-300 mt-3 ml-5 mb-0'>
                Gender:<span className='float-right mr-5 f-w-500'>Female</span>
              </h5>
            </div>

            <Modal
              show={this.state.isVarying}
              onHide={() => this.setState({ isVarying: false })}
            >
              <Modal.Header closeButton>
                <Modal.Title as='h5'> {this.state.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Enter name'
                      defaultValue={this.state.title}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Relationship:</Form.Label>
                    <Form.Control name='relationship' as='select'>
                      <option>Father</option>
                      <option>Mother</option>
                      <option>Child</option>
                      <option>Brother</option>
                      <option>Sister</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>DOB:</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      placeholder='Enter date of birth:'
                      defaultValue={this.state.title}
                    />
                  </Form.Group>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control name='gender' as='select'>
                      <option>Female</option>
                      <option>Male</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant='secondary'
                  onClick={() => this.setState({ isVarying: false })}
                >
                  Close
                </Button>
                <Button variant='primary'>Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </Aux>
    );
  }
}

export default PersonalInfo;
