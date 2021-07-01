import React, {Component} from 'react';
import {Row, Col, Card, Tab, Tabs, Nav, Button, Modal,Form} from 'react-bootstrap';
import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";

import PersonalInfo from './PersonalInfo';
import FamilyMember from './FamilyMember';
import Measurement from './Measurement';
import Document from './Document';
class Profile extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl ={4}>
                        <PersonalInfo/>
                        <FamilyMember/>
                    </Col>
                    <Col xl ={8}>
                        <Measurement/>
                        <Document/>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Profile;