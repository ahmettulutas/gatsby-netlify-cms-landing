import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ mainpitch }) => (
  <div className='page-container'>
    <section className='about'>
      <div>
        <div>
          <h3 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen'>
            {mainpitch.subtitle}
          </h3>
        </div>
        <div className='tile '>
          <p className='subtitle text--uppercase'>
            {mainpitch.description}
          </p>
        </div>
      </div>
      <PreviewCompatibleImage imageInfo={{ image: mainpitch.image }} />
    </section>
  </div>
);
