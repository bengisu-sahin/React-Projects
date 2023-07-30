import React, { Component } from 'react';
import './App.css';
import Search from './components/search/Search';

function App() {

const onSearchChange=(searchData)=>{
  console.log(searchData);
}
  return (
    <div className="container" >
      <Search onSearchChange={onSearchChange} />
    </div>
  );


};

export default App;
