import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { getImage } from 'gatsby-plugin-image';
import BlogRoll from '../components/BlogRoll';
import Features from '../components/Features';
import Layout from '../components/layout/Layout';
import { graphql } from 'gatsby';
import Hero from '../components/Hero';
import '../assets/styles/main.less';
import PropTypes from 'prop-types';
import { Form } from '../components/Form';
import IntersectionObserverWrapper from '../components/IntersectionObserver';


export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  about,
  intro
}) => {
  const heroImage = getImage(image) || image;
  return (
    <>
      <Hero
        title={title}
        background={heroImage.url ? heroImage.url : heroImage.images.fallback.src || heroImage.image}
        subheading={subheading}
      />
      <div className='page-container'>
        <AboutSection about={about}/>
        <Features features={intro.blurbs} heading={intro.heading}/>
        <IntersectionObserverWrapper animationSlide={'slideLeft'} translate={20} delay={800} once={false}>
          <section className='contact one-child'>
            <h1 className='highlighted'>İletişim</h1>
            <Form />
          </section>
        </IntersectionObserverWrapper>
        <section>
          <h1 className='highlighted m-auto'>Blog</h1>
          <BlogRoll />
        </section>
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
  about: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark,
    heroImage = getImage(frontmatter.image) || frontmatter.image;
  return (
    <Layout title={frontmatter.title} description={frontmatter.pagedescription} metaImage={heroImage.images.fallback.src}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
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
        pagedescription
				heading
				subheading
				about {
					title
					subtitle
					description
        	image {
            childImageSharp {
              gatsbyImageData(width: 300, quality: 100, layout: FULL_WIDTH)
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
				}
			}
		}
	}
`;
