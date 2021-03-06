import React from 'react';
import SEO from '../components/seo';

const TravelPage = () => {
  return (
    <>
      <SEO title="Travel" />
      <div className="section-container narrow-column">
        <h3 className="cursive">Getting In</h3>
        {/* <div className="caps-subheader accent">Reserved Room Blocks</div> */}
        <div className="caps-subheader accent">Transportation - Flights</div>
        <p>
          We recommend flying into{' '}
          <a
            href="https://goo.gl/maps/QJsg5hqj7FvKa7126"
            target="blank"
            className="accent"
          >
            Burbank
          </a>{' '}
          (closer to our venue) or{' '}
          <a
            href="https://goo.gl/maps/Lejcs5zgbbPTAabn9"
            target="blank"
            className="accent"
          >
            LAX
          </a>{' '}
          (more flights/airlines)!
        </p>
        {/* <p>If booking via phone, mention Lowe/White Wedding.</p> */}

        {/* <div className="place">
          <h4>AC Hotel by Marriott San Jose</h4>

          <p>
            5 minute walk to the venue
            <br />
            $179/night
          </p>
          <p>1-800-993-4751</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1598551566717&amp;key=GRP&amp;app=resvlink"
            className="submit-button link-button"
          >
            Book Online with Marriott
          </a>
        </div> */}
        {/* <div className="place">
          <h4>Hyatt Place San Jose</h4>
          <p>
            9 minute walk to the venue
            <br />
            $129/night
          </p>
          <p>1-408-925-0900</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hyatt.com/en-US/group-booking/SJCZJ/G-LOW2"
            className="submit-button link-button"
          >
            Book Online with Hyatt
          </a>
        </div> */}
      </div>

      <div className="section">
        <div className="section-container narrow-column">
          <h3 className="cursive">Getting Around</h3>
          <div className="caps-subheader accent">
            Transportation - Rental Car
          </div>
          <p>
            LA is big, and getting around by car is highly recommended. Uber and
            Lyft is readily available, otherwise using a car sharing platform
            such as{' '}
            <a href="https://turo.com/" target="blank" className="accent">
              Turo
            </a>{' '}
            or{' '}
            <a
              href="https://www.getaround.com/"
              target="blank"
              className="accent"
            >
              Getaround
            </a>{' '}
            are super reasonable.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container narrow-column">
          <h3 className="cursive">Stay</h3>
          <div className="caps-subheader accent">Reserved Room Blocks</div>
          <h4>Coming soon!</h4>
        </div>
      </div>

      <div className="section">
        <div className="section-container narrow-column">
          <h3 className="cursive">Eat &amp; Explore</h3>
          <div className="caps-subheader accent">
            Our Favorite Eats &amp; Places
          </div>
          {/* <h4>Coming soon!</h4> */}
          Click{' '}
          <a
            href="https://ryanefendy.notion.site/Christy-Ryan-Essential-LA-Food-Experiences-a7d889df1a1c48fea5460f9aaa4f2682"
            target="blank"
            className="accent"
          >
            here
          </a>{' '}
          for our ever growing list!
        </div>
      </div>

      {/* <div className="section">
        <div className="section-container narrow-column">
          <h3 className="cursive">Explore</h3>
          <div className="caps-subheader accent">Our Favorite Places</div>
          <h4>Coming soon!</h4>
        </div>
      </div> */}

      <br />
      <br />
    </>
  );
};

export default TravelPage;
