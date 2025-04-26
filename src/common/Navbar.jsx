import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={styles.navbar} dir="rtl">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={styles.brand}>مطعم الجود</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" 
          aria-controls="navbarNavDropdown" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav gap-4 ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>القائمة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>العروض</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.link}>تواصل معنا</a>
            </li>
            <li className="nav-item">
              <a className="btn" href="#" style={styles.bookingButton}>احجز الآن</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#fff', // خلفية بيضاء
    padding: '10px 20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // ظل خفيف
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    color: '#D60F14',
    fontWeight: 'bold',
    fontSize: '26px',
    textDecoration: 'none',
  },
  link: {
    color: '#333',
    fontSize: '18px',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  bookingButton: {
    backgroundColor: '#D60F14',
    color: '#fff',
    padding: '6px 14px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  },
};

// تأثيرات الهوفر:
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  .nav-link:hover {
    color: #D60F14 !important;
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  .btn:hover {
    background-color: #a80b0f !important;
  }
`, styleSheet.cssRules.length);

export default Navbar;
