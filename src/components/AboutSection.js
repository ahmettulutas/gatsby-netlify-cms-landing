import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ mainpitch }) => (
  <section className='about'>
    <div>
      <PreviewCompatibleImage imageInfo={{ image: mainpitch.image }} />
    </div>
    <div>
      <div style={{ textAlign: 'center' }}>
        <h3 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen has-text-centered-desktop'>
          {mainpitch.subtitle}
        </h3>
      </div>
      <div className='tile '>
        <p className='subtitle text--uppercase has-text-centered-touch'>
          {mainpitch.description}
        </p>
      </div>
    </div>
  </section>
);
