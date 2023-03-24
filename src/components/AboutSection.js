import React from 'react';
import { BackgroundTitle } from './BackgroundTitle';
import IntersectionObserverWrapper from './IntersectionObserver';
/* import IntersectionObserverWrapper from './IntersectionObserver'; */
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ about }) => (
  <section className='about'>
    <BackgroundTitle title={about.subtitle} />
    <IntersectionObserverWrapper animationSlide={'slideRight'} translate={20} delay={800} once={false}>
      <div>
        <h3 className='highlighted'>
          {about.subtitle}
        </h3>
        <p className='light-text'>
          {about.description}
        </p>
      </div>
    </IntersectionObserverWrapper>
    <IntersectionObserverWrapper animationSlide={'slideLeft'} translate={20} delay={800} once={false}>
      <div className="about-image-container">
        <PreviewCompatibleImage imageInfo={{ image: about.image }} />
      </div>
    </IntersectionObserverWrapper>
  </section>
);
