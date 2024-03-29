import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from './components/Loading';
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="google-site-verification" content="qOJnzSY0F3QooocWyUzh6eBaHnIZz5jUD7gqCf8UXb4" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={'loader'} id="___loader" style={{
          alignItems: 'center',
          backgroundColor: '#F2F2F2',
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          height: '100vh',
          width: '100vw'
        }}>
          <div style={{ width: '100px', height: 'auto' }}>
            <Loading />
          </div>
        </div>
        <div
          style={{ display: 'none' }}
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
