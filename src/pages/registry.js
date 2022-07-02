import React from 'react';
import SEO from '../components/seo';

const RegistryPage = () => {
  return (
    <>
      <SEO title="Registry" />
      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Registry</h3>
          {/* <div className="caps-subheader accent">Zola Gift Registry</div> */}
          <p>
          Your presence is enough of a present to us! But for those of you who wish to contribute to our future, we have a future fund that will help us begin our new life together. We sincerely appreciate your generosity and support!
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://withjoy.com/ryan-and-christy/registry"
            className="submit-button"
            style={styles.viewRegistry}
          >
            View Joy Registry
          </a>
          <br />
          <br />
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.amazon.com/wedding/share/ryanandchristy111222"
            className="submit-button"
            style={styles.viewRegistry}
          >
            View Amazon Registry
          </a>
        </div>
      </div>
    </>
  );
};

const styles = {
  viewRegistry: {
    display: 'inline-block',
    textDecoration: 'none',
  },
};

export default RegistryPage;
