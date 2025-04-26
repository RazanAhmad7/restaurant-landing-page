import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Logo and Description */}
        <div style={styles.column}>
          <h2 style={styles.logo}>
           مطعم الجود
            </h2>
          <p style={styles.description}>
            نقدم لك أفضل الخدمات والعروض. تابعنا لتبقى دائماً على اطلاع بكل جديد.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h3 style={styles.columnTitle}>روابط سريعة</h3>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>الرئيسية</a></li>
            <li><a href="#" style={styles.link}>من نحن</a></li>
            <li><a href="#" style={styles.link}>الخدمات</a></li>
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
          <h3 style={styles.columnTitle}>اعرف اخر أخبارنا </h3>
          <div style={styles.socialIcons}>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#4267B2' }}><FaFacebookF /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#C13584' }}><FaInstagram /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#1DA1F2' }}><FaTwitter /></a>
            <a href="#" style={{ ...styles.socialIcon, backgroundColor: '#FF0000' }}><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Copy Rights */}
      <div style={styles.bottomBar}>
        <p>© {new Date().getFullYear()} جميع الحقوق محفوظة | مطعم الجود</p>
      </div>

    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#555', // أسود خفيف
    color: '#eee',
    padding: '60px 20px 20px',
    direction: 'rtl',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '30px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    fontSize: '26px',
    color: '#fff',
    marginBottom: '15px',
  },
  description: {
    fontSize: '15px',
    color: '#ccc',
    lineHeight: '1.7',
  },
  columnTitle: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#fff',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  link: {
    color: '#ccc',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s ease',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  bottomBar: {
    borderTop: '1px solid #333',
    marginTop: '40px',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#777',
  }
};

export default Footer;
