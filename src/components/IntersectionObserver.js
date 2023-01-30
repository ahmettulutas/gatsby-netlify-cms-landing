import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { generateTransform } from '../utils/helpers';
import { animations } from '../lib/constants';


const IntersectionObserverWrapper = ({ children, delay, animationSlide, translate, customStyle }) => {
  const [hasIntersected, setHasIntersected] = useState(false),
    targetRef = useRef(null),
    animations = generateTransform(translate);
  useEffect(() => {
    const observerCallback = entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => setHasIntersected(true), 200);
            console.log('IntersectionObserverWrapper', Number(entry.intersectionRatio.toFixed(1)) > 0.1, hasIntersected);
          }
          else {
            setHasIntersected(false);
          }

        });
      },
      observer = new IntersectionObserver(observerCallback);
    if (targetRef.current)
      observer.observe(targetRef.current);
    return () => {
      observer.disconnect();
    };

  }, [targetRef.current]);
  return (
    <section ref={targetRef}
      style={{
        ...customStyle,
        margin: '2rem 0',
        transform: hasIntersected ? 'none' : `${animations[animationSlide]}`,
        opacity: hasIntersected ? 1 : 0,
        transition: `all cubic-bezier(.175,.885,.32,1.275) ${delay/1000}s`
      }}>
      {children}
    </section>
  );
};


IntersectionObserverWrapper.propTypes = {
  delay: PropTypes.number.isRequired,
  animationSlide: PropTypes.oneOf(Object.keys(animations)),
  translate: PropTypes.number,
  customStyle: PropTypes.object
};
export default IntersectionObserverWrapper;