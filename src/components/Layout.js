import * as React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.sass';
/* import useSiteMetadata from '../utils/SiteMetadata'; */
import { withPrefix } from 'gatsby';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
/* import { Loading } from './Loading'; */
const Layout = ({ title, description, featuredImage, titleTemplate, children, hasWhiteBg }) => (
  <>
    <Helmet titleTemplate={titleTemplate} >
      <html lang='tr' />
      <title>{title}</title>
      <meta name='description' content={description} />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={`${withPrefix('/')}img/psychology-logo.svg`}
      />
      <link
        rel='icon'
        type='image/svg'
        href={`${withPrefix('/')}img/psychology-logo.svg`}
        sizes='32x32'
      />
      <link
        rel='icon'
        type='image/png'
        href={`${withPrefix('/')}img/favicon-16x16.png`}
        sizes='16x16'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Allura&display=swap'
        rel='stylesheet'></link>
      <link
        href='https://fonts.googleapis.com/css?family=Nunito&display=swap'
        rel='stylesheet'></link>
      <script
        src='https://kit.fontawesome.com/02130b3d51.js'
        crossOrigin='anonymous'></script>
      <link
        rel='mask-icon'
        href={`${withPrefix('/')}img/psychology-logo.svg`}
        color='#ff4400'
      />
      <meta name='theme-color' content='#fff' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content='https://meltemulutas.com' />
      <meta
        property='og:site_name'
        content='Uzman Psikolog Meltem Ulutaş'></meta>
      {/*       <meta property="og:image" content={featuredImage} /> */}
      <meta
        property='og:image'
        content={`${withPrefix('/')}${featuredImage}`}
      />
      <meta property='og:description' content={description}></meta>
      <meta charset='UTF-8'></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no"></meta>
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Helmet>
    <div className='main-layout'>
      <Navbar hasWhiteBg={hasWhiteBg}/>
      <main>{children}</main>
      <Footer />
    </div>
    <FloatingWhatsApp
      phoneNumber='+905300954085'
      accountName='Meltem Ulutaş'
      chatMessage='Merhaba, nasıl yardımcı olabilirim?'
      placeHolder='Mesajınız'
      statusMessage='Şu anda aktif'
      avatar={`${withPrefix('/')}img/psychology-logo.svg`}
      notification={false}
    />
  </>
);

export default Layout;
