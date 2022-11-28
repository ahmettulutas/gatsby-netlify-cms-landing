import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline feature-card'>
    {gridItems.map(item => (
      <section key={item.text} className='column is-4' lang="tr">

        <div className='has-text-centered'>
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <h3 className='has-text-centered'>{item.title}</h3>
        <p className='has-text-centered'>{item.text}</p>

      </section>
    ))}
  </div>
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
