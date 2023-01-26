import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <section>
    <h3 className='is-size-1-mobile is-size-1-tablet is-size-1-widescreen has-text-centered'>
      Uzmanlıklarım
    </h3>
    <div className='feature-cards'>

      {gridItems.map(item => (
        <section key={item.text} lang="tr" className='feature'>
          <div className='feature-image'>
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div>
            <h3>{item.title}</h3>
            <p className='light-text'>{item.text}</p>
          </div>
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
