import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home'; 
import Products from './products'; 
import Member from './member'; 

export default function Router4() {
  return (
    <BrowserRouter>
   <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active_menu" : "menu"} style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "" })}>Home</NavLink> -&nbsp;
        <NavLink to="/products" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Products</NavLink> -&nbsp;
        <NavLink to="/member" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Member</NavLink> -&nbsp;
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Contact Us</NavLink>
      </nav>
      <div style={{ margin: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/member" element={<Member />} /> {}
          <Route path="/contact" element={<div style={{ textAlign: 'center' }}>Contact Page</div>} />
          <Route path="/*" element={<Navigate to="/*" />} /> {}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

