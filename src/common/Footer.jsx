import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Logo and Description */}
        <div style={styles.column}>
          <h2 style={styles.logo}>مطعم الجود</h2>
          <p style={styles.description}>
            نسعى لتقديم أفضل تجربة طعام لك. تابعنا ليصلك كل جديد وعروضنا المميزة.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>روابط سريعة</h3>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>الرئيسية</a></li>
            <li><a href="#" style={styles.link}>من نحن</a></li>
            <li><a href="#" style={styles.link}>القائمة</a></li>
            <li><a href="#" style={styles.link}>اتصل بنا</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>مساعدة</h3>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>الأسئلة الشائعة</a></li>
            <li><a href="#" style={styles.link}>سياسة الخصوصية</a></li>
            <li><a href="#" style={styles.link}>الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>تابعنا على</h3>
          <div style={styles.socialIcons}>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#3b5998' }}><FaFacebookF /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#E1306C' }}><FaInstagram /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#1DA1F2' }}><FaTwitter /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#FF0000' }}><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Copy Rights */}
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} مطعم الجود | جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#ddd',
    padding: '60px 20px 30px',
    direction: 'rtl',
    fontFamily: 'Tajawal, Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  logo: {
    fontSize: '28px',
    color: '#fff',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#bbb',
    lineHeight: '1.8',
  },
  columnTitle: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '10px',
    borderBottom: '2px solid #ff8c8c',
    paddingBottom: '5px',
    width: 'fit-content',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  link: {
    color: '#bbb',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  socialIcon: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '20px',
    transition: 'transform 0.3s',
  },
  bottomBar: {
    marginTop: '50px',
    borderTop: '1px solid #444',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#888',
  }
};

export default Footer;
