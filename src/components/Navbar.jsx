import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " dir='rtl'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">مطعم روزا</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav gap-3">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">الرئيسية</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">القائمة</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">العروض</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">احجز الان</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تواصل معنا</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar