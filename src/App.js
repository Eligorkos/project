import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Help from './pages/Help';
import Catalog from './pages/Catalog';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/catalog" element={<Catalog />} /> 
        <Route path="/main" element={<Main />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </>
  );
}

export default App;
