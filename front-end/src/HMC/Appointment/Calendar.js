import React, {Component} from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import FullCalendar from 'fullcalendar-reactwrapper';
import Datetime from 'react-datetime';
import {CirclePicker} from 'react-color';
import Aux from "../../hoc/_Aux";

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: '2021-06-28',
            events:[
                {
                    title: 'Jones | Check up',
                    start: '2021-06-28T07:30:00',
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }, 
                {
                    title: 'Mengting | Check up',
                    start: '2021-06-01T11:00:00',
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'

                }, 
                {
                    title: 'Yen | Vision Check',
                    start: '2021-06-23T08:00:00',
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                }, 
                {
                    title: 'Jones | Check up',
                    start: '2021-06-12T07:30:00',
                    borderColor: '#a389d4',
                    backgroundColor: '#a389d4',
                    textColor: '#fff'
                }, 
                {
                    title: 'Mengting | Check up',
                    start: '2021-06-23T07:45:00',
                    borderColor: '#f44236',
                    backgroundColor: '#f44236',
                    textColor: '#fff'

                }, 
                {
                    title: 'Yen | Vision Check',
                    start: '2021-06-18T08:00:00',
                    borderColor: '#1de9b6',
                    backgroundColor: '#1de9b6',
                    textColor: '#fff'
                }, 
                {
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2021-06-18T08:00:00'
				}
            ]
        };
    }
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Appointment</Card.Title>
                            </Card.Header>
                            <Card.Body className='calendar'>
                                <FullCalendar
                                    id = "datta-calendar"
                                    className='calendar'
                                    header = {{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'month,basicWeek,basicDay'
                                    }}
                                    defaultDate={this.state.today}
                                    navLinks= {true}
                                    editable= {true}
                                    eventLimit= {true}
                                    events = {this.state.events}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                    <Form>
                            <Form.Group>
                                <Form.Label>Person</Form.Label>
                                <Form.Control as="select">
                                    <option>Yen</option>
                                    <option>Nico</option>
                                    <option>Jones</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Control as="select">
                                    <option>Routine Check up</option>
                                    <option>Eye Care</option>
                                    <option>Dental</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date and Time</Form.Label>
                                <Datetime dateFormat="dddd D MMMM Y -" inputProps={{placeholder: 'Select Date & Time'}} />
                            </Form.Group>
                            <Form.Group>    
                                <Form.Check
                                                custom
                                                required
                                                type="checkbox"
                                                id="supported-checkbox"
                                                label="Need reminder"
                                                onChange={() => this.setState(prevState => { return {reminder: !prevState.reminder}})}
                                            />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Calendar Color</Form.Label>
                                <CirclePicker />
                            </Form.Group>

                            <Button variant="primary">
                                Add apppointment
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Calendar;