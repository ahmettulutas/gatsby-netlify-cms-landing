import * as React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';

const BlogIndexPage = () => (
  <Layout title={'Meltem Ulutaş Blog Yazıları'}>
    <Hero title={'Blog'} background={blog} hasDarkBg />
    <section className='section' style={{ width: '100%' }}>
      <div className='container'>
        <h1 className="title is-1">Psikoloji Blog</h1>
        <div className='content'>
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;