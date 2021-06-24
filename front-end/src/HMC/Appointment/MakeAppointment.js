import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

class MakeAppointment extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Make Appointment' isOption>
                            <p>
                                This page in progressing
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default MakeAppointment;