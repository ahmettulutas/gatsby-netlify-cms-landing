import React from 'react';
import Layout from '../../components/Layout';
import './thankyou.css';

const ThankYou = () => (
  <Layout>
    <div className="body"></div>
    <div className="thankyoucontent">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <img src="https://i.ibb.co/Lkn7rkG/thank-you-envelope.png" alt="thank-you-envelope" border="0" />
          <h1>Mesaj İletildi.</h1>
          <p>Bizimle iletişime geçmeniz için</p>
          <p>mesajınız alındığında hemen yanıt vereceğiz.</p>
          <button className="go-home">
            <a href="/">Anasayfa</a>
          </button>
        </div>
      </div>
    </div>
  </Layout>
);
export default ThankYou;