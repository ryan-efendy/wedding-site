import React from 'react';
import './footer.css';

const Footer = () => (
  <footer
    className="footer inline"
    style={{
      paddingBottom: '30px',
      textAlign: 'center',
    }}
  >
    <div>
      <h1 className="footer">
        © {new Date().getFullYear()}, Built with ❤️ by Ryan &amp; Christy
      </h1>
    </div>
  </footer>
);

export default Footer;
