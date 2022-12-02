import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import '../assets/styles/main.less';
import Hero from '../components/Hero';
import { getImage } from 'gatsby-plugin-image';

const Features = React.lazy(() => import('../components/Features')),
  GetAppointment = React.lazy(() => import('../components/GetAppointment')),
  BlogRoll = React.lazy(() => import('../components/BlogRoll')),
  ContactInfo = React.lazy(() => import('../components/ContactInfo'));

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  mainpitch,
  intro
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <Hero
        title={title}
        background={
          heroImage.url ? heroImage.url : image.childImageSharp.gatsbyImageData.images.fallback.src || heroImage.image
        }
        subheading={subheading}
      />
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <div className='main-container'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <ContactInfo gridItems={intro.blurbs} />
        </React.Suspense>
        <section className='about'>
          <div>
            <PreviewCompatibleImage
              imageInfo={{ image: mainpitch.image }}
            />
          </div>
          <div>
            <div style={{ textAlign: 'center' }}>
              <h3 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen has-text-centered-desktop'>
                {mainpitch.subtitle}
              </h3>
            </div>
            <div className='tile' style={{ textAlign: 'center' }}>
              <p className='subtitle text--uppercase has-text-centered-touch'>
                {mainpitch.description}
              </p>
            </div>
          </div>
        </section>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Features gridItems={intro.blurbs} />
        </React.Suspense>
        <React.Suspense fallback={<div>Loading...</div>}>
          <GetAppointment />
        </React.Suspense>
        <div className='column is-12'>
          <h3 className='has-text-weight-semibold is-size-2 has-text-centered m-b-2'>
						En Son Yazılarım
          </h3>
          <React.Suspense fallback={<div>Loading...</div>}>
            <BlogRoll />
          </React.Suspense>
          <div className='column is-12 has-text-centered'>
            <Link className='more-btn' to='/blog'>
							Daha Fazla
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
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
