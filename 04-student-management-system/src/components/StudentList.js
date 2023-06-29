import React from 'react';
import { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { Button, Modal, OverlayTrigger, Tooltip, Table } from 'react-bootstrap';
import Student from "./Student";

const StudentList = () => {
    const { students } = useContext(StudentContext);

    return (
        <>
            <div className='student-list-container container'>
                <div className='row'>
                    <div className='col-11'>
                        <h3>Öğrenci Listesi</h3>
                    </div>
                    <div className='col-1'>
                        <Button variant="primary" className="btn-primary">Add</Button>
                    </div>
                </div>

                <div className='row'>                   
                    <table className='table-students table'>
                        <thead className='table-light'>
                            <tr>
                                <th className="col-3">İsim Soyisim</th>
                                <th className="col-3">Öğrenci Numarası</th>
                                <th className="col-3">Bölüm</th>
                                <th className="col-3">Yetkiler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <Student student={student} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default StudentList;