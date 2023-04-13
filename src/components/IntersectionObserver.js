import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { generateTransform } from '../utils/helpers';
import { animations as AnimationTypes } from '../lib/constants';

const IntersectionObserverWrapper = ({
  children,
  delay,
  animationSlide,
  translate,
  customStyle
}) => {
  const [hasIntersected, setHasIntersected] = useState(false),
    targetRef = useRef(null),
    animations = generateTransform(translate);


  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          setTimeout(() => setHasIntersected(true), 200);
        /*  else
          setHasIntersected(false); */

      });
    });
    if (targetRef.current)
      observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef.current]);

  const styles = {
    ...customStyle,
    transform: hasIntersected ? 'none' : `${animations[animationSlide]}`,
    opacity: hasIntersected ? 1 : 0,
    transition: `all cubic-bezier(.175,.885,.32,1.275) ${
      hasIntersected ? delay / 1000 : 0
    }s`
  };

  return (
    <section ref={targetRef} style={styles}>
      {children}
    </section>
  );
};

IntersectionObserverWrapper.propTypes = {
  delay: PropTypes.number.isRequired,
  animationSlide: PropTypes.oneOf(Object.keys(AnimationTypes)),
  translate: PropTypes.number,
  customStyle: PropTypes.object
};

IntersectionObserverWrapper.defaultProps = {
  animationSlide: 'slideDown',
  translate: 20,
  customStyle: {}
};

export default IntersectionObserverWrapper;
