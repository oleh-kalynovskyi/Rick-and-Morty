import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css'


export default function Navbar() {
    return (
        <div className='Navbar'>
            <NavLink to='/Rick-and-Morty'> 
                <h1>Rick and Morty test task</h1>
            </NavLink> 
            
            <ul className="nav-wrapper">
                <li> 
                    <NavLink to='/characters' activeClassName="selected"> 
                        Characters
                    </NavLink> 
                </li>
                
                <li> 
                    <NavLink to='/episodes' activeClassName="selected"> 
                        Episodes 
                    </NavLink> 
                </li>

                <li> 
                    <NavLink to='/locations' activeClassName="selected"> 
                        Locations 
                    </NavLink> 
                </li>

                <li> 
                    <NavLink to='/my-watch-list' activeClassName="selected"> 
                        My watch list
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
