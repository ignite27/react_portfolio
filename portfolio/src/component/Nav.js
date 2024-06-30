import React from 'react'
// import Cards from './Cards'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
    <div className="container-fluid ">
      <a className="navbar-brand" href="#">CRC-Training</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item dropdown ">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Assignments
            </a>
            <ul className="dropdown-menu bg-dark-subtle">
              <li><a className="dropdown-item" href="#a1">Assingment1</a></li>
              <li><a className="dropdown-item" href="#a2">Assingment2</a></li>
              <li><a className="dropdown-item" href="#a3">Assingment3</a></li>
              <li><a className="dropdown-item" href="#a4">Assingment4</a></li>
              <li><a className="dropdown-item" href="#a5">Assingment5</a></li>
              <li><a className="dropdown-item" href="#a6">Assingment6</a></li>
              <li><a className="dropdown-item" href="#a7">Assingment7</a></li>
              <li><a className="dropdown-item" href="#a8">Assingment8</a></li>
              <li><a className="dropdown-item" href="#a9">Assingment9</a></li>
              <li><a className="dropdown-item" href="#a10">Assingment10</a></li>
              <li><a className="dropdown-item" href="#a11">Assingment11</a></li>
              <li><a className="dropdown-item" href="#a12">Assingment12</a></li>
              
            </ul>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
  )
}
