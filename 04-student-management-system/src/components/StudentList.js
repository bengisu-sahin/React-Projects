import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { Button, Modal, OverlayTrigger, Tooltip,Table } from 'react-bootstrap';
import Student from "./Student";

const StudentList = () => {
    const { students } = useContext(StudentContext);
    return (
        <div className='student-list-container'>
            <div className='row'>
                <div className='col-6'> <h3>Öğrenci Listesi</h3></div>
                <div className='col-6'><Button variant="primary" className="btn-primary">Add</Button></div>
            </div>
            
                <Table className='table-striped x'>
                    <thead>
                        <tr>
                            <th>İsim Soyisim</th>
                            <th>Öğrenci Numarası</th>
                            <th>Bölüm</th>
                            <th>Yetkiler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.fname.concat(" ", student.lname)}</td>
                                <td>{student.num}</td>
                                <td>Bilgisayar Mühendisliği</td> 
                                <td>
                                    <Button variant="danger" className="btn-primary">Sil</Button>{' '}
                                    <Button variant="primary" className="btn-primary">Düzenle</Button>{' '}
                                    <Button variant="success" className="btn-primary">Detay</Button>{' '}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
     
    );
};


export default StudentList;
