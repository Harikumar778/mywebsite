import React from 'react'

import {Link} from 'react-router-dom'
function Navbar() {
  return (
      <>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark nav-custom py-3 fixed-top'>
        <div className="container">
        <a href="#" className="navbar-brand">Harry</a>
            <button className="navbar-toggler btn-cloud " type ="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"><img src="https://img.icons8.com/fluency/48/000000/user-menu-male.png" alt="" /></button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <Link  className="nav-link" to='/'>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skill_sec">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link" href='#experience'>EXPERIENCE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects-items">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact-form">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
       
      </nav>
      
   </>
  )
}

export default Navbar