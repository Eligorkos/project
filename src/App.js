import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Help from './pages/Help';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Notfound from './pages/NotFound.js'
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/help" element={<Help />} /> 
        <Route path="/catalog" element={<Catalog />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
