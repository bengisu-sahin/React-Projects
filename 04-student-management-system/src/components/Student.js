import React from 'react';
import ReactDOM from 'react-dom';
import { createContext, useEffect, useReducer, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { Button, Modal, OverlayTrigger, Tooltip, Table } from 'react-bootstrap';

const Student = ({student}) => {
    const departments = {
        "1": "Bilgisayar Müh.",
        "2": "Elektrik-Elektronik Müh.",
        "3": "Endüstri Müh.",
        "4": "İnşaat Müh."
    };
    return (
        <>
            <td className='col-3'>{student.fname.concat(" ", student.lname)}</td>
            <td className='col-3'>{student.num}</td>
            <td className='col-3'>{departments[student.dept]}</td>
            <td className='col-3'>
                <Button variant="danger" className="btn-primary col-3">Sil</Button>{' '}
                <Button variant="primary" className="btn-primary col-3">Düzenle</Button>{' '}
                <Button variant="success" className="btn-primary col-3">Detay</Button>{' '}
            </td>
        </>
    );
}

export default Student;