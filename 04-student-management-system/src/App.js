import React from 'react';
import ReactDOM from 'react-dom';
import StudentContextProvider from './contexts/StudentContext';
import StudentList from './components/StudentList';
import HeaderPart from "./components/HeaderPart"

function App() {
  return (
    <>
    <HeaderPart />
    <StudentContextProvider >
      <StudentList />
    </StudentContextProvider>
    </>
  );
}

export default App;