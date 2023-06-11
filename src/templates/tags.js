import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/Layout';
import Hero from '../components/Hero';
import blog from '../../static/img/blog-writing.jpg';

const TagRoute = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges,
    postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <h2 className="size-3">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    )),
    { tag } = pageContext,
    { title } = data.site.siteMetadata,
    { totalCount } = data.allMarkdownRemark,
    tagHeader =` ${tag} etiketine sahip ${totalCount} blog yazısı bulundu.`;
  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`}/>
      <Hero
        isHalfHero
        title={title}
        smallTitle
        background={blog}
      />
      <div className='page-container'>
        <div
          className='my-5'>
          <h1 className='size-3'>{tagHeader}</h1>
          <ul className='taglist'>{postLinks}</ul>
          <p>
            <Link to='/tags/'>Bütün etiketleri listele</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};


export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
