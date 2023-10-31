import React from 'react';
import Layout from '../../components/layout/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';

const BlogIndexPage = () => (
  <Layout title={'Meltem Ulutaş Blog'}>
    <Hero title={'Blog'} background={blog} />
    <section className='page-container'>
      <BlogRoll />
    </section>
  </Layout>
);

export default BlogIndexPage;