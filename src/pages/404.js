import React from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage = () => (
  <Layout title={'Meltem Ulutaş Blog Hata Sayfası'} description={'Meltem Ulutaş resmi sayfasında hata ekranı görüntüleniyor.'} hasWhiteBg>
    <section className='flex align-center justify-center h-screen flex-col my-5'>
      <h3 className='highlighted'>Bir hata oluştu.</h3>
      <StaticImage objectFit='cover' src={'../../static/img/error.webp'} width={300} height={300} alt="hata-görüntüsü" />
      <Link to="/" className='more-btn'>Geri Dön</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
