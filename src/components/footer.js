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
        Built with ❤️ by Ryan &amp; Christy 👉 {' '}
          <a
            href="https://www.bible.com/bible/59/1JN.4.19.ESV"
            target="blank"
            className="accent"
          >
            1 John 4:19
          </a>{' '}
      </h1>
    </div>
  </footer>
);

export default Footer;
