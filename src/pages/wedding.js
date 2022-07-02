import React from 'react';
import SEO from '../components/seo';

const WeddingPage = () => {
  return (
    <>
      <SEO title="Wedding" />
      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Ceremony</h3>
          <div className="caps-subheader accent">Where: IFGF Los Angeles</div>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/xQdmsvsjyJYr243DA"
              className="accent"
            >
              147 W Palm Ave, Monrovia, CA 91016
            </a>
          </p>
          <div className="caps-subheader accent">When: 2:30 pm</div>
          <p>
            Our ceremony will be held at our church. There's plenty of free
            street parking around the church.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Reception</h3>
          <div className="caps-subheader accent">
            Where: Sheraton Los Angeles San Gabriel
          </div>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/wExKkHWNsDCU7HDe9"
              className="accent"
            >
              303 E Valley Blvd, San Gabriel, CA 91776
            </a>
          </p>
          <div className="caps-subheader accent">When: 5:00 pm</div>
          <p>
            The reception will be held at the Sheraton (separate location from
            the ceremony). Dinner and party to follow! There's subsidized
            self-parking in Sheraton's underground lot.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Wedding Party</h3>
          <div className="caps-subheader accent">Coming soon!</div>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default WeddingPage;
