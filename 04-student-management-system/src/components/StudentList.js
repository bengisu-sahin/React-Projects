import React from 'react';
import { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { Button, Modal } from 'react-bootstrap';
import Student from "./Student";
import '../index.css';
import AddForm from './AddForm';

const StudentList = () => {
    const { students } = useContext(StudentContext);
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <div className='student-list-container container'>
                <div className='row'>
                    <div className='col-11'>
                        <h3>Öğrenci Listesi</h3>
                    </div>
                    <div className='col-1'>
                        <Button variant="primary" className="btn-primary" onClick={handleShowAddModal}><i className="bi bi-person-plus"></i></Button>
                    </div>
                </div>
                <div className='row'>
                    <table className='a table'>
                        <thead className='table-light'>
                            <tr >
                                <th className="col-3">İsim Soyisim</th>
                                <th className="col-3">Öğrenci Numarası</th>
                                <th className="col-3">Bölüm</th>
                                <th className="col-3">Yetkiler</th>
                            </tr>
                        </thead>
                        <tbody className='table-students'>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <Student student={student} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Add Modal */}
            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm handleCloseAddModal={handleCloseAddModal} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default StudentList;