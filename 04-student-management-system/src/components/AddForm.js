import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddStudentForm = ({ handleCloseAddModal }) => {
    const [newStudent, setNewStudent] = useState({
        fname: "",
        lname: "",
        num: "",
        dept: "",
        pob: "",
        dob: ""
    });
    const [validationErrors, setValidationErrors] = useState({});
    const handleChange = (e) => {
        console.log(e.target.value);
        setNewStudent({ ...newStudent, [e.target.id]: e.target.value });
    };
    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        setNewStudent({ ...newStudent, dob: formattedDate });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            handleCloseAddModal();
        } else {
            setValidationErrors(errors);
        }
    };
    const regex = /^[A-Za-zşŞıİçÇöÖüÜĞğ ]+$/;
    const validateForm = () => {
        const errors = {};
        if (!newStudent.fname || !/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/.test(newStudent.fname) || newStudent.fname.length < 3) {
            errors.fname = "İsim sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!newStudent.lname || !/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/.test(newStudent.lname) || newStudent.lname.length < 3) {
            errors.lname = "Soyisim sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!newStudent.pob || newStudent.pob.length < 3) {
            errors.pob = "Doğum yeri sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!newStudent.num || !/^\d{12}$/.test(newStudent.num)) {
            errors.num = "Öğrenci numarası 12 rakamdan oluşmalıdır.";
        }
        if (!newStudent.dept) {
            errors.dept = "Bölüm seçilmelidir.";
        }
        if (!newStudent.dob) {
            console.log(newStudent.dob)
            errors.dob = "Doğum tarihi seçilmelidir.";
        }
        return errors;
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="fname" className="my-2">
                        <Form.Label>İsim</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            isInvalid={validationErrors.fname}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.fname}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="lname" className="my-2">
                        <Form.Label>Soyisim</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            isInvalid={validationErrors.lname}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.lname}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="num" className="my-2">
                        <Form.Label>Öğrenci Numarası</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            isInvalid={validationErrors.num}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.num}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="dept" className="my-2">
                        <Form.Label>Bölüm</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={handleChange}
                            isInvalid={validationErrors.dept}
                        >
                            <option value="">Seçiniz</option>
                            <option value="1">Bilgisayar Müh.</option>
                            <option value="2">Elektrik-Elektronik Müh.</option>
                            <option value="3">Endüstri Müh.</option>
                            <option value="4">İnşaat Müh.</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.dept}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="pob" className="my-2">
                        <Form.Label>Doğum Yeri</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={handleChange}
                            isInvalid={validationErrors.pob}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.pob}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <Form.Group controlId="dob" className="my-2">
                        <Form.Label>Doğum Tarihi</Form.Label>
                        <DatePicker
                            selected={newStudent.dob ? new Date(newStudent.dob) : null}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            isInvalid={validationErrors.dob}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.dob}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleCloseAddModal} size="md" className="mx-1">
                    Close
                </Button>

                <Button variant="primary" type="submit" size="md" className="mx-1">
                    Add
                </Button>
            </Form.Group>
        </Form>
    );
};

export default AddStudentForm;