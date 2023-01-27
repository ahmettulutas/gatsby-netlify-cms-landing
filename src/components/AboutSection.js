import React from 'react';
import { BackgroundTitle } from './BackgroundTitle';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const AboutSection = ({ mainpitch }) => (
  <div className='page-container'>

    <section className='about'>
      <BackgroundTitle title={'Hakkımda'} />
      <div>
        <div>
          <h3 className='size-1 highlighted'>
            {mainpitch.subtitle}
          </h3>
        </div>
        <div className='tile '>
          <p className='subtitle text--uppercase'>
            {mainpitch.description}
          </p>
        </div>
      </div>
      <div className="about-image-container">
        <PreviewCompatibleImage imageInfo={{ image: mainpitch.image }} />
      </div>
    </section>
  </div>
);
