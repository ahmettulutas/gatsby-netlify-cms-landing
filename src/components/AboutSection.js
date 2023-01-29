import React from 'react';
import { BackgroundTitle } from './BackgroundTitle';
import IntersectionObserverWrapper from './IntersectionObserver';
/* import IntersectionObserverWrapper from './IntersectionObserver'; */
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ mainpitch }) => (
  <div className='page-container'>

    <section className='about'>
      <BackgroundTitle title={'Hakkımda'} />
      <IntersectionObserverWrapper animationSlide={'slideRight'} translate={20} delay={800} once={false}>
        <div>
          <h3 className='size-1 highlighted'>
            {mainpitch.subtitle}
          </h3>
          <p className='subtitle text--uppercase'>
            {mainpitch.description}
          </p>
        </div>
      </IntersectionObserverWrapper>
      <IntersectionObserverWrapper animationSlide={'slideLeft'} translate={20} delay={800} once={false}>
        <div className="about-image-container">
          <PreviewCompatibleImage imageInfo={{ image: mainpitch.image }} />
        </div>
      </IntersectionObserverWrapper>
    </section>
  </div>
);
