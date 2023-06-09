import React from 'react';
import ReactDOM from 'react-dom';
import { createContext, useEffect, useReducer, useState } from "react";
import StudentList from '../components/StudentList';
import axios from 'axios';

export const StudentContext = createContext();
//Bu bilesen öğrenci bilgilerini almak icin json server ile iletişime gecer ve diğer componentlere bu bilgileri saglar. (consumer-provider context api structure)
const StudentContextProvider = (props) => {
    const [students, setStudents] = useState([]);

    /**useEffect()
     * Bileşen ilk render edildiği anda verileri almak icin fetch işlemi gerçekleşir.
     */
    useEffect(() => {
        const fetcData = async () => {
            try {
                const response = await fetch('http://localhost:8000/students');
                const data = await response.json();
                setStudents(data);
            }
            catch (error) {
                console.log("Error occured when the student information is taking.");
            }
        };
        fetcData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.log('Verileri alırken bir hata oluştu', error);
            }
        };

        fetchData();
    }, [students]);

    const addStudent = async (newStudent) => {
        try {
            setStudents([...students, newStudent]);
            const response = await axios.post('http://localhost:8000/students', newStudent);
            //return response.data;
        } catch (error) {
            throw new Error('Öğrenci eklenirken bir hata oluştu.');
        }
    }
    const deleteStudent = async (studentID) => {
        try {
            await fetch(`http://localhost:8000/students/${studentID}`, { method: 'DELETE', });
            setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentID));
        }
        catch (error) {
            console.error('Öğrenci silinirken bir hata oluştu', error);
        }
    };
    const updateStudent = async (studentID, updatedStudent) => {
        try {
            await axios.put(`http://localhost:8000/students/${studentID}`, updatedStudent);
            setStudents(prevStudents => prevStudents.map(student => student.id === studentID ? { ...student } : student));
        } catch (error) {
            console.error('Öğrenci güncellenirken bir hata oluştu', error);
        }
    };

    return (
        <StudentContext.Provider value={{ students, addStudent, deleteStudent, updateStudent }}>
            {props.children}
        </StudentContext.Provider>
    );
}

export default StudentContextProvider;