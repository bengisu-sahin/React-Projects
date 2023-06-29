import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';
import DetailForm from './DetailForm';

const Student = ({ student }) => {
    const departments = {
        "1": "Bilgisayar Müh.",
        "2": "Elektrik-Elektronik Müh.",
        "3": "Endüstri Müh.",
        "4": "İnşaat Müh."
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDetailModal = () => setShowDetailModal(false);
    const handleShowDetailModal = () => setShowDetailModal(true);

    return (
        <>
            <td className='col-3'>{student.fname.concat(" ", student.lname)}</td>
            <td className='col-3'>{student.num}</td>
            <td className='col-3'>{departments[student.dept]}</td>
            <td className='col-3'>
                <Button variant="danger" className="btn-primary col-3">Sil</Button>{' '}
                <Button variant="primary" className="btn-primary col-3" onClick={handleShowEditModal}>Düzenle</Button>{' '}
                <Button variant="success" className="btn-primary col-3" onClick={handleShowDetailModal}>Detay</Button>{' '}
            </td>

            {/* Detail Modal */}
            <Modal show={showDetailModal} onHide={handleCloseDetailModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailForm theStudent={student} dept={departments[student.dept]} onClose={handleCloseDetailModal} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Student;