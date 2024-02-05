import React from 'react'

function Nanbar() {
  return (
  
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
         Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">
            Signup
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/logout">
            Logout
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/dashboard">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nanbar