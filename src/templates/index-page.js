import React from 'react';
/* import GetAppointment from '../components/GetAppointment'; */
import { AboutSection } from '../components/AboutSection';
/* import ContactInfo from '../components/ContactInfo'; */
import { getImage } from 'gatsby-plugin-image';
import BlogRoll from '../components/BlogRoll';
import Features from '../components/Features';
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import Hero from '../components/Hero';
import '../assets/styles/main.less';
import PropTypes from 'prop-types';


export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro
}) => {
  const heroImage = getImage(image) || image;
  console.log(intro);
  return (
    <>
      <Hero
        title={title}
        background={
          heroImage.url ? heroImage.url : image.childImageSharp.gatsbyImageData.images.fallback.src || heroImage.image
        }
        subheading={subheading}
      />
      <div className='main-container'>
        <AboutSection mainpitch={mainpitch}/>
        <Features gridItems={intro.blurbs} heading={intro.heading}/>
        <BlogRoll />
        <div className='column is-12 has-text-centered'>
          <Link className='more-btn' to='/blog'>
							Daha Fazla
          </Link>
        </div>
      </div>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  pageDescription: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark,
    heroImage = getImage(frontmatter.image) || frontmatter.image;
  return (
    <Layout title={frontmatter.title} description={frontmatter.pageDescription} featuredImage={heroImage.images.fallback.src}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				image {
					childImageSharp {
						gatsbyImageData(quality: 100, layout: FULL_WIDTH)
					}
				}
        pageDescription
				heading
				subheading
				mainpitch {
					title
					subtitle
					description
        	image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
				}
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								gatsbyImageData(width: 60, quality: 64, layout: CONSTRAINED)
							}
						}
            title
						text
					}
					heading
					description
				}
			}
		}
	}
`;
