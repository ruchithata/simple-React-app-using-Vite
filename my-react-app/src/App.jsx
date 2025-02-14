// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './components/Home.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
