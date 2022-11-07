import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from '../components/BlogRoll';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import '../assets/styles/main.less';
import Hero from '../components/Hero';
import ContactInfo from '../components/ContactInfo';

// eslint-disable-next-line
export const IndexPageTemplate = ({
	image,
	title,
	subheading,
	heading,
	mainpitch,
	intro,
}) => {
	return (
		<div>
			<Hero
				title={title}
				background={image.childImageSharp.gatsbyImageData.images.fallback.src}
				subheading={subheading}
			/>

			<div className='main-container'>
				<ContactInfo />
				<section className='about columns is-multiline p-10'>
					<div className='column has-text-centered'>
						<PreviewCompatibleImage
							imageInfo={{ image: './img/meltemulutasprofile.jpg' }}
						/>
					</div>
					<div className='column is-6 p-10 text'>
						<div className='tile'>
							<h2 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen'>
								{mainpitch.title}
							</h2>
						</div>
						<div className='tile'>
							<h3 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen'>
								{mainpitch.subtitle}
							</h3>
						</div>
						<div className='tile'>
							<p className='subtitle text--uppercase'>
								{mainpitch.description}
							</p>
						</div>
					</div>
				</section>
				<Features gridItems={intro.blurbs} />
				<div className='column is-12'>
					<h3 className='has-text-weight-semibold is-size-2 has-text-centered'>
						En Son Yazılarım
					</h3>
					<BlogRoll />
					<div className='column is-12 has-text-centered'>
						<Link className='btn' to='/blog'>
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
		blurbs: PropTypes.array,
	}),
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
      frontmatter: PropTypes.object,
    }),
  }),
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
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
