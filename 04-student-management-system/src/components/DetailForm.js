import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const DetailForm = ({ theStudent , dept}) => {
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group controlId="firstName">
                        <Form.Label>İsim</Form.Label>
                        <Form.Control type="text" value={theStudent.fname} disabled />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lastName">
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control type="text" value={theStudent.lname} disabled />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="firstName">
                        <Form.Label>Öğrenci Numarası</Form.Label>
                        <Form.Control type="text" value={theStudent.num} disabled />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lastName">
                        <Form.Label>Bölüm</Form.Label>
                        <Form.Control type="text" value={dept} disabled />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="firstName">
                        <Form.Label>Doğum Yeri</Form.Label>
                        <Form.Control type="text" value={theStudent.pob} disabled />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="lastName">
                        <Form.Label>Doğum Tarihi</Form.Label>
                        <Form.Control type="text" value={theStudent.dob} disabled />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
}

export default DetailForm;
