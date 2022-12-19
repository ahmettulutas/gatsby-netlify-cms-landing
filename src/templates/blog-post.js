import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
/* import { Helmet } from 'react-helmet'; */
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
/* import PreviewCompatibleImage from '../components/PreviewCompatibleImage'; */
import FullWidthImage from '../components/FullWidthImage';
import { getImage } from 'gatsby-plugin-image';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  /*   helmet, */
  featuredImage

}) => {
  const PostContent = contentComponent || Content,
    postImage = getImage(featuredImage) || featuredImage;
  return (
    <>
      {/*       {helmet || ''} */}
      <section className='blog-content'>

        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <h1 className='title is-size-2 has-text-weight-bold is-bold-light has-text-centered'>
              {title}
            </h1>
            {/*             <div className='blog-image'>
              <PreviewCompatibleImage
                imageInfo={{ image: featuredImage }}
              />
            </div> */}
            <FullWidthImage img={postImage} />
            <p className='description'>{description}</p>
            <PostContent content={content} />
            {tags && tags.length
              ? (
                <div style={{ marginTop: '4rem' }}>
                  <h4>Etiketler</h4>
                  <ul className='taglist'>
                    {tags.map(tag => (
                      <Link key={`${tag}tag`} className='more-btn' to={`/tags/${kebabCase(tag)}/`}>
                        {tag}
                      </Link>
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
  const { markdownRemark: post } = data,
    { title, description, featuredimage } = post.frontmatter;
  return (
    <Layout title={title} description={description} featuredImage={featuredimage} titleTemplate='%s' hasWhiteBg>
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
        featuredImage={featuredimage}
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
