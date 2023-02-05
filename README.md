# Gatsby + Netlify CMS Psychology Blog Website


**Note:** This is a blog website I have built for my wife that utilizes [Gatsby v4](https://www.gatsbyjs.com/gatsby-4/).


## Features 
- A simple landing page with blog functionality built with Netlify CMS
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-plugin-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- Everthing is custom. It has a custom form validation example.
- It also has a custom scroll animation. (Check IntersectionObserver.js for details.)

## Adding a Loader Spinner in Gatsby site
run the following command to copy the default-html.js file and rename it as html.js and will place it in our src directory.

```
cp .cache/default-html.js src/html.js
```
