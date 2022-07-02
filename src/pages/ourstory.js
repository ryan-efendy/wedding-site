import React from 'react';
import SEO from '../components/seo';


// const MARGIN = 4;

// function GalleryImage({ index, left, top, key, photo, onClick }) {
//   return (
//     <div
//       onClick={(e) => {
//         onClick(e, { index });
//       }}
//       key={key}
//     >
//       <Img
//         fluid={photo}
//         style={{
//           margin: MARGIN,
//           height: photo.height,
//           width: photo.width,
//           cursor: 'pointer',
//         }}
//       />
//     </div>
//   );
// }

// export const query = graphql`
//   fragment PhotoImage on File {
//     sourceInstanceName
//     childImageSharp {
//       preview: fluid(maxWidth: 300, quality: 100) {
//         ...GatsbyImageSharpFluid
//       }
//       fullscreen: fluid(maxWidth: 1000, quality: 100) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `;

// function getPhotos(images) {
//   const previewPhotos = images.edges.map((edge) => {
//     const image = edge.node.childImageSharp.preview;

//     return {
//       ...image,
//       width: image.aspectRatio,
//       height: 1,
//     };
//   });

//   const fullscreenPhotos = images.edges.map((edge) => {
//     const image = edge.node.childImageSharp.fullscreen;

//     return {
//       ...image,
//       width: image.aspectRatio,
//       height: 1,
//     };
//   });

//   return [previewPhotos, fullscreenPhotos];
// }

const GalleryPage = () => {
  // const data2 = useStaticQuery(graphql`
  //   query {
  //     engagement: allFile(
  //       filter: { sourceInstanceName: { eq: "engagement" } }
  //     ) {
  //       edges {
  //         node {
  //           ...PhotoImage
  //         }
  //       }
  //     }

  //     engagement2: allFile(
  //       filter: { sourceInstanceName: { eq: "engagement2" } }
  //     ) {
  //       edges {
  //         node {
  //           ...PhotoImage
  //         }
  //       }
  //     }

  //     travel: allFile(filter: { sourceInstanceName: { eq: "travel" } }) {
  //       edges {
  //         node {
  //           ...PhotoImage
  //         }
  //       }
  //     }

  //     howwemet: allFile(filter: { sourceInstanceName: { eq: "howwemet" } }) {
  //       edges {
  //         node {
  //           ...PhotoImage
  //         }
  //       }
  //     }

  //     vaccinated: allFile(
  //       filter: { sourceInstanceName: { eq: "vaccinated" } }
  //     ) {
  //       edges {
  //         node {
  //           ...PhotoImage
  //         }
  //       }
  //     }
  //   }
  // `);

  // const [engagementPreviewPhotos, engagementFullscreenPhotos] = getPhotos(
  //   data2.engagement
  // );
  // const [engagement2PreviewPhotos, engagement2FullscreenPhotos] = getPhotos(
  //   data2.engagement2
  // );
  // const [travelPreviewPhotos, travelFullscreenPhotos] = getPhotos(data2.travel);
  // const [howwemetPreviewPhotos, howwemetFullscreenPhotos] = getPhotos(
  //   data2.howwemet
  // );

  // const [vaccinatedPreviewPhotos, vaccinatedFullscreenPhotos] = getPhotos(
  //   data2.vaccinated
  // );

  // const [currentImage, setCurrentImage] = useState(0);
  // const [fullscreenPhotos, setFullscreenPhotos] = useState(
  //   engagement2FullscreenPhotos
  // );
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((photos, event, { photo, index }) => {
  //   setFullscreenPhotos(photos);
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setViewerIsOpen(false);
  //   setCurrentImage(0);
  // };

  // const videoAspectRatioPercentage = (315 / 560) * 100;

  return (
    <>
      <SEO title="Our Story" />
      {/* <div className="section">
        <div className="section-container">
          <h3 className="cursive">We're Vaccinated!</h3>
          <div className="caps-subheader accent">May 2021</div>
          <p>
            Wow, what a year. Thanks to the scientists that have been hard at
            work creating a vaccine — we are so excited that we will be able to
            have a safe celebration with all of you in person!
          </p>
          <p>
            We’re happily showing off our CDC cards and hope you’re already
            fully vaccinated or are on your way!
          </p>

          <Gallery
            photos={vaccinatedFullscreenPhotos}
            renderImage={GalleryImage}
            onClick={openLightbox.bind(null, vaccinatedFullscreenPhotos)}
            margin={MARGIN}
          />
        </div>
      </div> */}
      {/* 
      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Pandemic?!</h3>
          <div className="caps-subheader accent">March 2020 - Unknown</div>
          <p>
            Well this wasn’t part of the plan! Due to the COVID-19 pandemic
            we’ve decided to postpone our wedding until 2021. We hope that
            everyone is staying home, wearing a mask when going out, and staying
            healthy.
          </p>
          <p>
            Just before the Bay Area’s shelter in place order we took some
            photos to document and celebrate our engagement &mdash; here are
            some of our favorites. Although our wedding is a bit further away
            now, we are finding joy in some unexpected quality time, and really
            getting some mileage out of the title fiancé! We are so looking
            forward to getting to see everyone in person and celebrating our
            love in an environment where we can all feel comfortable being
            together. We are hoping and planning that this will be with all of
            you on August 28, 2021!
          </p>

          <Gallery
            photos={engagement2PreviewPhotos}
            renderImage={GalleryImage}
            onClick={openLightbox.bind(null, engagement2FullscreenPhotos)}
            margin={MARGIN}
          />
        </div>
      </div> */}

      {/* <div className="section">
        <div className="section-container">
          <h3 className="cursive">Engagement</h3>
          <div className="caps-subheader accent">September 7th 2019</div>
          <p>
            On our first night in Mallorca, Spain (Balearic Islands) after
            traveling to Poland and Germany &mdash; we had arranged to take a
            sunset hot air balloon ride. With some additional planning and a
            gorgeous ring he picked himself, Eli turned this outing into a
            perfect surprise proposal!
          </p>
          <Gallery
            photos={engagementPreviewPhotos}
            renderImage={GalleryImage}
            onClick={openLightbox.bind(null, engagementFullscreenPhotos)}
            margin={MARGIN}
          />
          <div
            style={{
              paddingTop: `${videoAspectRatioPercentage}%`,
              position: 'relative',
              margin: MARGIN,
            }}
          >
            <iframe
              title="Eli's Proposal Video"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/Tczp4_kkVus"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div> */}

      {/* <div className="section">
        <div className="section-container">
          <h3 className="cursive">Travel</h3>
          <div className="caps-subheader accent narrow-column">
            Austria, Denmark, England, France, Germany, Israel, Italy, Japan,
            Mexico, Poland, Spain
          </div>
          <p>
            Over the past 4 years we have been fortunate to be able to travel
            the world! So far we’ve been to 11 countries together! Inspired by
            Eli’s globetrotting past we’ve visited some familiar locations, and
            many new ones, and have enjoyed sharing these experiences with each
            other. We look forward to seeing some exciting new destinations in
            2021 and beyond.
          </p>
          <Gallery
            photos={travelPreviewPhotos}
            renderImage={GalleryImage}
            onClick={openLightbox.bind(null, travelFullscreenPhotos)}
            margin={MARGIN}
          />
        </div>
      </div> */}

      <div className="section">
        <div className="section-container">
          <h3 className="cursive">Our Story</h3>
          <div className="caps-subheader accent">How We Met</div>
          <p>
            On a Friday night in October 2019, Christy made the cross-country,
            prime rush hour trek from Santa Monica to Arcadia after work to
            attend the dinner portion of a leadership conference… because who
            else would be brazen enough to skip the conference and only attend
            dinner? This kid. She was low-key dreading it during the hour-long
            drive, especially since her friend Stacy and sister Charissa had
            been teasing in a group chat that many Jesus-loving male singles
            from around the country were in attendance at this conference which
            has proven to essentially be a real-life "Christian Mingle." Christy
            rolled up to dinner irreverently late and sat at the saved seat
            between Sasa and Stacy, right across the table from Ryan.
            <br />
            There,under the delicate lights of the ever-romantic, alluringly
            named establishment called{' '}
            <a
              href="https://goo.gl/maps/pn8xCG8QvG6RqcQx9"
              target="blank"
              className="accent"
            >
              Tong Tak
            </a>{' '}
            (doesn't that just sound so dreamy) and the sweet intoxicating aroma
            of steamed fish, Ryan was smitten. As Christy began gorging herself
            on the authentic Chinese cuisine, Ryan was steadily chugging bottles
            of water and looking at Reddit for a cheesy Christian pickup line
             to strike up a conversation with Christy.
          </p>
          {/* <Gallery
            photos={howwemetPreviewPhotos}
            renderImage={GalleryImage}
            onClick={openLightbox.bind(null, howwemetFullscreenPhotos)}
            margin={MARGIN}
          /> */}
          {/* <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  views={fullscreenPhotos}
                  currentIndex={currentImage}
                  styles={{
                    footerCaption: () => ({
                      fontSize: '18px',
                    }),
                    footerCount: () => ({
                      fontSize: '18px',
                    }),
                  }}
                />
              </Modal>
            ) : null}
          </ModalGateway> */}
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Who made the first move? How?
          </div>
          <p>
            Though nothing eventful happened the night (or weekend) we met,
            Ryan went into research mode. He found Christy’s Instagram a few
            days later through another conference attendant he befriended named 
            Josh (he’s resourceful like that). He slid into the DMs like
            only a classic, chivalrous Gen-Z could. Christy saw the message
            flash across her phone and began to mildly panic. Why was this guy
            messaging her? Why does he use so many emojis? Is it because he… God
            forbid… is single and ready to mingle? It was too much for her, and
            she quickly alerted Sasa and Stacy that one of those Jesus-loving
            males dared to start a conversation. She breathed a sigh of relief
            when she opened his message as he seemingly innocently was inquiring
            about a small group (which Christy leads) for his “friend” that was
            moving to LA. Little did they both know that this imaginary friend
            he was talking about… would turn out to be him.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            Our testimony of God’s faithfulness
          </div>
          <p>
            Christy (lives in LA) and Ryan (lives in Seattle) met in October at
            a church conference in LA and went on their first date shortly after
            in November. On this very first date, Ryan dared to admit out loud
            to Christy that the Lord spoke to him and led him to believe that
            Christy was the one he had been praying for. Naturally, Christy
            thought he was a psychopath. She pushed him away until it was
            undeniable that he was legit and was astounded to see that Ryan
            would remain as serious as ever about her and their relationship as
            he was in the beginning. He demonstrated this by leaving his
            comforting community in Seattle to move to Christy's turf in LA and
            join her in the ministry she told him about when they first met.
            Since then, they've been serving together and growing together in
            Christ.
          </p>
        </div>
      </div>

      {/* <div className="section">
        <div className="section-container">
          <div className="caps-subheader accent">
            The dorkiest thing about us is
          </div>
          <p>
            We do relationship retrospectives (based loosely on agile
            methodology) where Christy acts as a Project Manager and Ryan acts
            as an Engineer. We use that time to talk about what went well for us
            as a couple and what we want to improve in our relationship.
          </p>
        </div>
      </div> */}
    </>
  );
};

export default GalleryPage;
