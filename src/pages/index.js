import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import SEO from '../components/seo';

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "christy-and-ryan.webp" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.image.childImageSharp.fluid} />;
};

const IndexPage = () => {
  return (
    <>
      <SEO title="Omg 🙈 these kids are getting married!" />
      <div className="section">
        <div className="section-container">
          <h3 className="cursive">We're Getting Married!</h3>
          <div className="caps-subheader">11.12.22</div>

          <div className="shadow-frame">
            <Image />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default IndexPage;
