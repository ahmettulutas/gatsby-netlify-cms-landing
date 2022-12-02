import * as React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero title={'Blog'} background={blog} hasDarkBg />
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
