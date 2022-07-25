import React from 'react';
import SEO from '../components/seo';

const RehearsalPage = () => {
  return (
    <>
      <SEO title="Rehearsal" />
      <div className="section">
        <div className="section-container">
          <h3 className="cursive">The Night Before</h3>
          <br />
          <p>Before we say ‘I do’, we want to see you!</p>
          <p>
            Please join us for a rehearsal dinner, the night before the wedding
            of Christy and Ryan
          </p>
          <p>FRIDAY, NOVEMBER 11 5PM</p>
          <p>IFGF LOS ANGELES</p>
          <p>147 W Palm Ave, Monrovia, CA 91016</p>
          <p>Business Casual Attire</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://form.typeform.com/to/lme7WJ6m"
            className="submit-button"
            style={styles.viewRegistry}
          >
            RSVP
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

export default RehearsalPage;
