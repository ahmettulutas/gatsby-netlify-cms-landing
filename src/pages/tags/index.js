import React from 'react';

import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';
import { kebapCaseConverter } from '../../utils/helpers';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Hero title={'Blog'} background={blog} />
    <section className="page-container">
      <Helmet title={`Etiketler | ${title}`} />
      <div className='my-5'>
        <h1 className="size-2">Etiketler</h1>
        <ul className="taglist">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebapCaseConverter(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
