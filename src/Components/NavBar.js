import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style.css'

const NavBar = () => {
    return(
        <div className="navbar" >
            <ul className="navbar-nav" >
                <li>
                    <NavLink className="nav-link" to="/"><span className="link-text" >Home</span></NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/login"><span className="link-text" >Login</span></NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="/register"><span className="link-text" >Register</span></NavLink> 
                </li>
                <li>
                    <NavLink className="nav-link" to="/profile"><span className="link-text" >Profile</span></NavLink> 
                </li>
                {/* <li>
                    <NavLink to="/episodes">Episodes</NavLink> 
                </li> */}
            </ul>

        </div>
    )
} 

export default NavBar