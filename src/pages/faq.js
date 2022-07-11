import React from 'react';
import SEO from '../components/seo';


const FaqPage = () => {
  return (
    <>
      <SEO title="FAQ" />
      <div className="section">
        <div className="section-container">
          {/* <h3 className="cursive">COVID-19 Vaccines</h3> */}
          <div className="caps-subheader accent">
            When is the RSVP deadline?
          </div>
          <p>
            Please RSVP by July 24th so we can send you a physical invitation to follow up.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Can I bring a date?
          </div>
          <p>
            Please see your invite for your +1!
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Where should I park?
          </div>
          <p>
          There's plenty of free street parking around the church for the ceremony. For the reception at Sheraton, there's discounted self-parking in their underground lot.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            What should I wear?
          </div>
          <p>
            Formal attire!
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Is the wedding indoors or outdoors?
          </div>
          <p>
            Ryan gets pretty chilly, so we are staying entirely indoors!
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Is it okay to take pictures with our phones and cameras during the wedding?
          </div>
          <p>
          We are hosting an <i>#unplugged</i> ceremony and ask that you kindly join us in putting devices away and let yourself be swept in the moment. Take it all in with the best dual camera there is-- your own eyeballs! During the reception, we invite everyone to take as many photos and videos as your storage space will permit.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            How will food and drinks be served?
          </div>
          <p>
          A 10-course meal will be served during the reception and there will be bottles on the table.
          </p>
        </div>
      </div>
      {/* <div className="section">
        <div className="section-container">
          <h3 className="cursive">State and Local Guidelines</h3>
          <p>
            Our wedding will be held in accordance with all state and local
            guidelines. This is an ever changing situation - we will keep you
            updated via email and post here with any additional health and
            safety requirements for the event.
          </p>
        </div>
      </div> */}
      <br />
    </>
  );
};

export default FaqPage;
