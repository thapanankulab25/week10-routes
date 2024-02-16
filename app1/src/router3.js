import React from 'react'
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import './navlink.css'
import Products from './products'
import Home from './home'
import member from './member'
export default function Router3() {
return (
<BrowserRouter>
<nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active_menu" : "menu"} style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "" })}>Home</NavLink> -&nbsp;
        <NavLink to="/products" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Products</NavLink> -&nbsp;
        <NavLink to="/member" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Member</NavLink> -&nbsp;
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active_menu" : "menu"}>Contact Us</NavLink>
      </nav>
<div style={{margin: '20px'}}>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/member" Component={member} />
          <Route path="/contact" element={<div style={{ textAlign: 'center' }}>Contact Page</div>} />
          <Route path="/*" element={<div style={{ textAlign: 'center' }}>404 Not found</div>} />
        </Routes>
</div>
</BrowserRouter>
)
}