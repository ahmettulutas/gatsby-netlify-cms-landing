import React from 'react';
import { BackgroundTitle } from './BackgroundTitle';
import IntersectionObserverWrapper from './IntersectionObserver';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ about }) => (
  <section>
    <h3 className='highlighted'>{about.subtitle}</h3>
    <div className='about'>
      <BackgroundTitle title={about.subtitle} />
      <IntersectionObserverWrapper animationSlide={'slideLeft'} translate={20} delay={800} once={false}>
        <div className="about-image-container">
          <PreviewCompatibleImage imageInfo={{ image: about.image }} style={{ width: '100%' }} />
        </div>
      </IntersectionObserverWrapper>
      <IntersectionObserverWrapper animationSlide={'slideRight'} translate={20} delay={800} once={false}>
        <p className='size-3'>{about.description}</p>
      </IntersectionObserverWrapper>
    </div>
  </section>
);
