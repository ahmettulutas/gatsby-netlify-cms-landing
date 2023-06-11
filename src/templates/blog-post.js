import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import Content, { HTMLContent } from '../components/Content';
import { getImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import { kebapCaseConverter } from '../utils/helpers';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  image

}) => {
  const PostContent = contentComponent || Content,
    heroImage = getImage(image) || image;
  return (
    <>
      <Hero
        isHalfHero
        title={title}
        smallTitle
        background={
          heroImage.url ? heroImage.url : heroImage.images.fallback.src || heroImage.image
        }
      />

      <div className='page-container'>
        <section className='content-container'>
          <p className='description'>{description}</p>
          <PostContent content={content} className={'content'}/>
          {tags && tags.length
            ? (
              <div className='taglist'>
                <h4>Etiketler</h4>
                <ul>
                  {tags.map(tag => (
                    <Link key={`${tag}tag`} className='more-btn' to={`/tags/${kebapCaseConverter(tag)}/`}>
                      {tag}
                    </Link>
                  ))}
                </ul>
              </div>
            )
            : null}
        </section>
      </div>
    </>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data,
    { title, description, featuredimage } = post.frontmatter,
    heroImage = getImage(featuredimage) || featuredimage;
  return (
    <Layout title={title} description={description} metaImage={heroImage.images.fallback.src} titleTemplate='%s' /* hasWhiteBg */>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        /*         helmet={
          <Helmet titleTemplate='%s'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:image" content={post.frontmatter.featuredimage} />
          </Helmet>
        } */
        tags={post.frontmatter.tags}
        title={title}
        image={featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
			}
		}
	}
`;
