import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const AddForm = () => {
    return (
        <Form>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="firstName" className="my-2">
                        <Form.Label>İsim</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="lastName" className="my-2">
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="studentNum" className="my-2">
                        <Form.Label>Öğrenci Numarası</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="department" className="my-2">
                        <Form.Label>Bölüm</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="pob" className="my-2">
                        <Form.Label>Doğum Yeri</Form.Label>
                        <Form.Control type="text"  />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="dob" className="my-2">
                        <Form.Label>Doğum Tarihi</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default AddForm;