import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
			<div className='columns is-multiline'>
				{posts &&
					posts.map(({ node: post }) => (
						<div className='is-parent column is-12' key={post.id}>
							<article
								className={`blog-list-item tile is-child box notification ${
									post.frontmatter.featuredpost ? 'is-featured' : ''
								}`}>
								<header className='header'>
									{post.frontmatter.featuredimage ? (
										<div>
											<PreviewCompatibleImage
												imageInfo={{
													image: post.frontmatter.featuredimage,
													alt: `featured image thumbnail for post ${post.frontmatter.title}`,
													width:
														post.frontmatter.featuredimage.childImageSharp
															.gatsbyImageData.width,
													height:
														post.frontmatter.featuredimage.childImageSharp
															.gatsbyImageData.height,
												}}
											/>
										</div>
									) : null}
									<div>
										<p
											className='post-meta'
											style={{
												marginLeft: '1rem',
												display: 'flex',
												flexDirection: 'column',
											}}>
											<Link
												className='title has-text-primary is-size-4'
												to={post.fields.slug}>
												{post.frontmatter.title}
											</Link>
											<span className='subtitle is-size-5 is-block'>
												{post.frontmatter.date}
											</span>
										</p>
									</div>
								</header>
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className='button' to={post.fields.slug}>
										Okumaya Devam Et →
									</Link>
								</p>
							</article>
						</div>
					))}
			</div>
		);
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 100
                        height: 100
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
