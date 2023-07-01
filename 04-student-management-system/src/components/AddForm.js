import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const AddForm = ({handleCloseAddModal}) => {
    const { addStudent } = useContext(StudentContext);
    const [newStudent, setStudent] = useState({
        fname: '',
        lname: '',
        num: '',
        dept: '',
        pob: '',
        dob: ''
    });
    const { fname, lname, num, dept, pob, dob } = newStudent;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newStudent);
        addStudent(newStudent);
        handleCloseAddModal();
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="firstName" className="my-2">
                        <Form.Label>İsim</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, fname: e.target.value })} />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="lastName" className="my-2">
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, lname: e.target.value })} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="studentNum" className="my-2">
                        <Form.Label>Öğrenci Numarası</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, num: e.target.value })} />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="department" className="my-2">
                        <Form.Label>Bölüm</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, dept: e.target.value })} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="pob" className="my-2">
                        <Form.Label>Doğum Yeri</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, pob: e.target.value })} />
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="dob" className="my-2">
                        <Form.Label>Doğum Tarihi</Form.Label>
                        <Form.Control type="text" onChange={(e) => setStudent({ ...newStudent, dob: e.target.value })} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
            <Button variant="secondary" onClick={handleCloseAddModal} > Close </Button>
                <Button variant="primary" type='submit' > Add </Button>
            </Form.Group>
        </Form>
    );
};

export default AddForm;