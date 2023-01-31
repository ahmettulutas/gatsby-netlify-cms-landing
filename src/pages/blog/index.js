import * as React from 'react';
import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Hero from '../../components/Hero';
import blog from '../../../static/img/blog-writing.jpg';
import { BackgroundTitle } from '../../components/BackgroundTitle';

const BlogIndexPage = () => (
  <Layout title={'Meltem Ulutaş Blog Yazıları'}>
    <Hero title={'Blog'} background={blog} />
    <section className='page-container'>
      <BackgroundTitle title="Psikoloji" />
      <BlogRoll />
    </section>
  </Layout>
);

export default BlogIndexPage;