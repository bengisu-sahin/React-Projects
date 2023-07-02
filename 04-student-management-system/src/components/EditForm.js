import { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { Form, Button, Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditForm = ({ theStudent, dept, handleCloseEditModal }) => {
    const { updateStudent } = useContext(StudentContext);
    const [editStudent, setEditStudent] = useState(theStudent);
    const [validationErrors, setValidationErrors] = useState({});
    const handleChange = (e) => {
        console.log(e.target.value);
        setEditStudent({ ...editStudent, [e.target.id]: e.target.value });
    };
    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        setEditStudent({ ...editStudent, dob: formattedDate });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            updateStudent(theStudent.id, editStudent);
            handleCloseEditModal();
        } else {
            setValidationErrors(errors);
        }
    };
    const validateForm = () => {
        const errors = {};
        if (!editStudent.fname || !/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/.test(editStudent.fname) || editStudent.fname.length < 3) {
            errors.fname = "İsim sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!editStudent.lname || !/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/.test(editStudent.lname) || editStudent.lname.length < 3) {
            errors.lname = "Soyisim sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!editStudent.pob || editStudent.pob.length < 3) {
            errors.pob = "Doğum yeri sadece türkçe karakter içermeli ve en az 3 karakter uzunluğunda olmalıdır.";
        }
        if (!editStudent.num || !/^\d{12}$/.test(editStudent.num)) {
            errors.num = "Öğrenci numarası 12 rakamdan oluşmalıdır.";
        }
        if (!editStudent.dept) {
            errors.dept = "Bölüm seçilmelidir.";
        }
        if (!editStudent.dob) {
            console.log(editStudent.dob)
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
                            value={editStudent.fname}
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
                            value={editStudent.lname}
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
                            value={editStudent.num}
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
                            value={editStudent.dept}
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
                            value={editStudent.pob}
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
                            selected={editStudent.dob ? new Date(editStudent.dob) : null}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                            showYearDropdown
                            scrollableYearDropdown
                            yearDropdownItemNumber={100}
                            value={editStudent.dob}
                            isInvalid={validationErrors.dob}
                        />
                        <Form.Control.Feedback type="invalid">
                            {validationErrors.dob}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="d-flex justify-content-end">
                <Button variant="secondary" onClick={handleCloseEditModal} size="md" className="mx-1">
                    Vazgeç
                </Button>
                <Button variant="primary" type="submit" size="md" className="mx-1">
                    Onayla
                </Button>
            </Form.Group>
        </Form>
    );
}
export default EditForm;