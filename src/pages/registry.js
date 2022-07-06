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
            The presence of our friends and family is the greatest gift of all!
          </p>
          <p>
            However, if it's your wish to bless us with a gift, we would greatly
            appreciate a contribution to our honeymoon/newlywed fund as we're
            still praying for discernment as to where God wants us to live and
            minister in this new chapter of our lives.
          </p>
          <p>
            <a
              href="https://www.venmo.com/u/ryan-and-christy-newlywed-fund"
              target="blank"
              className="accent"
            >
              @ryan-and-christy-newlywed-fund
            </a>{' '}
            on Venmo
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://venmo.com/ryan-and-christy-newlywed-fund?txn=pay&note=Congrats!&amount=1.00"
            className="submit-button"
            style={styles.viewRegistry}
          >
            Send Gift on Venmo
          </a>
          {/* <br />
          <br />
          <br />
          <p>
            <a
              href="https://cash.app/$ryanchristyhoneymoon"
              target="blank"
              className="accent"
            >
              $ryanchristyhoneymoon
            </a>{' '}
            on CashApp
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cash.app/$ryanchristyhoneymoon"
            className="submit-button"
            style={styles.viewRegistry}
          >
            Send Gift on Cash App
          </a>
          <br />
          <br />
          <br />
          <p>
            <a
              href="https://paypal.me/ryanchristyhoneymoon"
              target="blank"
              className="accent"
            >
              @ryanchristyhoneymoon
            </a>{' '}
            on PayPal
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://paypal.me/ryanchristyhoneymoon"
            className="submit-button"
            style={styles.viewRegistry}
          >
            Send Gift on PayPal
          </a>
          <br />
          <br />
          <br />
          <p>
            <span className="accent">+12673073323</span> or{' '}
            <span className="accent">+16262837700</span> on Zelle
          </p> */}
          <br />
          <br />
          <br />
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
