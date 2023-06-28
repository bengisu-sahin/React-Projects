import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

const StudentList = () => {

    const { students } = useContext(StudentContext);

    return (
        <div>
            <h2>Öğrenci Listesi</h2>
            <table>
                <thead>
                    <tr>
                        <th>İsim Soyisim</th>
                        <th>Öğrenci Numarası</th>
                        <th>Yetkiler</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.fname.concat(" ",student.lname)}</td>
                            <td>{student.num}</td>
                            <td>
                            <Button variant="danger" className="btn-primary">Sil</Button>{' '}
                            <Button variant="primary" className="btn-primary">Düzenle</Button>{' '}
                            <Button variant="success" className="btn-primary">Detay</Button>{' '}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default StudentList;
