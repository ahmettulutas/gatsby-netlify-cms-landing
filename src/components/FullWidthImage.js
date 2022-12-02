import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function FullWidthImage(props) {
  const {
    height = 400,
    img,
    title,
    subheading,
    imgPosition = 'top left'
  } = props;

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: 'grid',
          alignItems: 'center'
        }}
      >
        {
          img?.url
            ?
            <img
              src={img}
              style={{
                gridArea: '1/1',
                height,
                width: '100%'
              }}
              alt=""
            />
            :
            <GatsbyImage
              image={img}
              objectFit={'cover'}
              objectPosition={imgPosition}
              style={{
                gridArea: '1/1',
                maxHeight: height
              }}
              layout="fullWidth"
              aspectratio={3 / 1}
              alt=""
              formats={['auto', 'webp', 'avif']}
            />
        }
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              gridArea: '1/1',
              position: 'relative',
              // This centers the other elements inside the hero component
              placeItems: 'center',
              display: 'grid'
            }}
          >
            {/* Any content here will be centered in the component */}
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  boxShadow:
                    'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                  backgroundColor: 'rgb(255, 68, 0)',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25em'
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  boxShadow:
                    'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
                  backgroundColor: 'rgb(255, 68, 0)',
                  color: 'white',
                  lineHeight: '1',
                  padding: '0.25rem',
                  marginTop: '0.5rem'
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string
};