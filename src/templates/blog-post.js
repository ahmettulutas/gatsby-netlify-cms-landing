import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredImage

}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}
      <section className='container blog-content'>

        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light has-text-centered'>
              {title}
            </h1>
            <div className='blog-image'>
              <PreviewCompatibleImage
                imageInfo={{ image: featuredImage }}
              />
            </div>
            <p className='description'>{description}</p>
            <PostContent content={content} />
            {tags && tags.length
              ? (
                <div style={{ marginTop: '4rem' }}>
                  <h4>Etiketler</h4>
                  <ul className='taglist'>
                    {tags.map(tag => (
                      <li key={`${tag}tag`}>
                        <a
                          style={{ color: '#D64000' }}
                          href={`/tags/${kebabCase(tag)}/`}>
                          {tag}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
              : null}
          </div>
        </div>
      </section>
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
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate='%s'>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name='description'
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:image" content={post.frontmatter.featuredimage} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featuredimage}
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
              width: 300
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
			}
		}
	}
`;
