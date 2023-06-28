import React from 'react';
import ReactDOM from 'react-dom';
import { createContext, useEffect, useReducer, useState } from "react";
import StudentList from '../components/StudentList';

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
    return (
        <StudentContext.Provider value={{ students }}>
            {props.children}
        </StudentContext.Provider>
    );
}

export default StudentContextProvider;