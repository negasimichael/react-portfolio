import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Nav = () => {
    return (
        <header className=" head text-white">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1>Negasi Michael</h1>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="navbar-brand" to="/contact">contact</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/portfolio">portfolio <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link"to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>

    )
}
export default Nav