import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { BackgroundTitle } from './BackgroundTitle';
import IntersectionObserverWrapper from './IntersectionObserver';

const FeatureGrid = ({ features, heading }) => (
  <section className='my-2'>
    <BackgroundTitle title={heading} />
    <h3 className='highlighted'>{heading}</h3>
    <div className='feature-cards'>

      {features.map((item, index) => (
        <section key={item.text} lang="tr" className='feature'>
          <IntersectionObserverWrapper animationSlide={'slideUp'} translate={20} delay={300 * (index + 1)} once={false}>
            <div className='feature-image'>
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className='size-3'>{item.text}</p>
            </div>
          </IntersectionObserverWrapper>
        </section>
      ))}
    </div>
  </section>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default FeatureGrid;
