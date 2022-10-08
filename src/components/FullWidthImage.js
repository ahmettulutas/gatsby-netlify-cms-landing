import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = 500,
    img,
    title,
    subheading,
    imgPosition = "top center",
  } = props;

  return (
    <React.Fragment>
      <figure
        className="margin-top-0"
        style={{
          position:"relative"
        }}
      >
        {img?.url ? (
          <img
            src={img}
            objectFit={"cover"}
            objectPosition={imgPosition}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: height,
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={1 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        ) : (
          <GatsbyImage
            image={img}
            objectFit={"cover"}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: height
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectratio={1 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            style={{
              // By using the same grid area for both, they are stacked on top of each other
              position: "absolute",
              top: "18%",
              left: "2%"
            }}
          >
            {title && (
              <h3
               
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  color: "#ffff",
                  lineHeight: "1",
                }}
              >
                {title}
              </h3>
            )}
            {subheading && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-1-tablet"
                style={{
                  color: "#D64000",
                  color: "white", 
                  lineHeight: "1",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                  fontFamily: "Allura, Sans-serif",
                  fontSize:"4rem !important"
                }}
              >
                {subheading}
              </h1>
            )}
          </div>
        )}
      </figure>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.number,
  subheading: PropTypes.string,
};
