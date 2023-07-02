import { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';
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
    const { deleteStudent } = useContext(StudentContext);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = () => setShowEditModal(true);

    const handleCloseDetailModal = () => setShowDetailModal(false);
    const handleShowDetailModal = () => setShowDetailModal(true);

    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleCloseDeleteModal = (studentID) => {
        console.log(studentID)
        deleteStudent(studentID);
        setShowDeleteModal(false);
    };

    return (
        <>
            <td className='col-3'>{student.fname.concat(" ", student.lname)}</td>
            <td className='col-3'>{student.num}</td>
            <td className='col-3'>{departments[student.dept]}</td>
            <td className='col-3'>
                <Button variant="danger" className="btn-primary col-3" onClick={handleShowDeleteModal}>Sil</Button>{' '}
                <Button variant="primary" className="btn-primary col-3" onClick={handleShowEditModal}>Düzenle</Button>{' '}
                <Button variant="success" className="btn-primary col-3" onClick={handleShowDetailModal}>Detay</Button>{' '}
            </td>
            {/* Delete Modal */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <i class="bi bi-exclamation-triangle-fill text-danger"></i> Öğrenciyi Sil
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> <strong>{student.fname} {student.lname}</strong> isimli öğrenciyi siliyorsunuz. Bu işlem geri alınamaz. Devam etmek istediğinize emin misiniz? </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        Vazgeç
                    </Button>
                    <Button variant="danger" onClick={() => handleCloseDeleteModal(student.id)}>
                        Sil
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title><i class="bi bi-exclamation-triangle-fill"></i> Öğrenciyi Düzenle</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditForm theStudent={student} dept={departments[student.dept]} onClose={handleCloseEditModal} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailModal} > Vazgeç </Button>
                    <Button variant="primary" onClick={handleCloseDetailModal} > Onayla </Button>
                </Modal.Footer>
            </Modal>

            {/* Detail Modal */}
            <Modal show={showDetailModal} onHide={handleCloseDetailModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Öğrenci Bilgileri</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DetailForm theStudent={student} dept={departments[student.dept]} onClose={handleCloseDetailModal} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetailModal} >Close </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Student;