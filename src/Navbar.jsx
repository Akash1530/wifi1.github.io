import React from "react";
import {NavLink }  from "react-router-dom";
const Navbar =()=>{

return (
    <>
    <NavLink exact activeClassName="active_class" to="/"> About us </NavLink>
    <NavLink activeClassName="active_class" to="/contact">About us </NavLink>
    
    </>
)
}

export default Navbar;

