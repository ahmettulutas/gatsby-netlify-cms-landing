import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

const ThankYou = () => (
  <Layout>
    <div className="thankyoucontent">
      <div className="wrapper-2">
        <h1>Mesaj İletildi.</h1>
        <p>Bizimle iletişime geçmeniz için</p>
        <p>mesajınız alındığında hemen yanıt vereceğiz.</p>
        <Link className='more-btn' to='/'>
					Anasayfa
        </Link>
      </div>
    </div>
  </Layout>
);
export default ThankYou;