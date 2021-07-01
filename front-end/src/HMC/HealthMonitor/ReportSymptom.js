import React from 'react';
import {Row, Col, Card, Form, InputGroup, Button} from 'react-bootstrap';
// import DropzoneComponent from 'react-dropzone-component';
// import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import Aux from "../../hoc/_Aux";
export const bodyOptions = [
    { value: 'head', label: 'Head', color: '#00B8D9' },
    { value: 'skin', label: 'Skin', color: '#0052CC' },
    { value: 'arm', label: 'Arms', color: '#5243AA' },
    { value: 'leg', label: 'Legs', color: '#FF5630'},
];
class ReportSymptom extends React.Component {
    constructor(props) {
        super(props);

        this.djsConfig = {
            addRemoveLinks: false,
            acceptedFiles: "image/jpeg,image/png,image/gif",
            autoProcessQueue: false,
            uploadprogress: 100
        };

        this.componentConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: 'no-url'
        };
    }

    handleFileAdded(file) {
        console.log(file);
    }

    render() {
        const config = this.componentConfig;
        const djsConfig = this.djsConfig;

        const eventHandlers = {
            addedfile: this.handleFileAdded.bind(this)
        };

        return (
            <Aux>
                <Row>
                    <Col xl={2}/>
                    <Col xl={8}>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Report Symptoms</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Which part of your body?</Form.Label>
                                            <CreatableSelect
                                                isMulti
                                                options={bodyOptions}
                                                pageSize={3}
                                            />
                                </Form.Group>
                                
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Symptoms Description</Form.Label>
                                            <Form.Control as="textarea" rows="5" />
                                </Form.Group>
                                <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text id="custom-addons5">Upload Photo</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <div className="custom-file">
                                                <Form.Control
                                                    aria-describedby="custom-addons5"
                                                    type="file"
                                                    className="custom-file-input"
                                                    id="validatedCustomFile1"
                                                />
                                                <Form.Label className="custom-file-label" htmlFor="validatedCustomFile1">Choose file</Form.Label>
                                            </div>
                                        </InputGroup>
                                        <Button variant="primary">
                                            Submit
                                        </Button>
                            </Card.Body>

                            {/* <Card.Body className='calendar'>
                                <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                            </Card.Body> */}
                        </Card>
                    </Col>
                    <Col xl={2}/>
                </Row>
            </Aux>
        );
    }
}

export default ReportSymptom;