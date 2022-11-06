

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.meltemulutas.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
	siteMetadata: {
		title: 'Psikolog Meltem Ulutaş',
		description:
			'Uzman Psikolog Meltem Ulutaş | Blog ve İletişim Sayfası | Psikolojik Danışmanlık | Psikolojik Terapi',
		siteUrl: 'https://www.meltemulutas.com/',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				sassOptions: {
					indentedSyntax: true,
				},
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images',
			},
		},
		`gatsby-plugin-image`,
		'gatsby-plugin-postcss',
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: '*' }],
					},
					'branch-deploy': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
					'deploy-preview': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-less`,
			options: {
				cssLoaderOptions: {
					camelCase: false,
				},
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass', '/all.less'], // applies purging only on the specified files
			},
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify', // make sure to keep it last in the array
	],
};
