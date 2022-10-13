import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
		<div>
			<Helmet>
				<html lang='tr' class="has-navbar-fixed-top" />
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
					crossorigin='anonymous'></script>
				<link
					rel='mask-icon'
					href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
					color='#ff4400'
				/>
				<meta name='theme-color' content='#fff' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content={title} />
				<meta property='og:url' content='https://meltemulutas.com' />
				<meta
					property='og:site_name'
					content='Uzman Psikolog Meltem Ulutaş'></meta>
				<meta
					property='og:image'
					content={`${withPrefix('/')}img/og-image.jpg`}
				/>
				<meta property='og:description' content={description}></meta>
				<meta charset='UTF-8'></meta>
			</Helmet>
			<div style={{ minHeight: '100vh'}}>
				<Navbar />
				<div>{children}</div>
				<Footer />
			</div>
		</div>
	);
};

export default TemplateWrapper;
