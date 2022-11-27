import * as React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className='columns is-multiline'>
    {gridItems.map(item => (
      <section key={item.text} className='column is-6'>

        <div className='has-text-centered'>
          <div
            style={{
              width: '90px',
              height: 'auto',
              display: 'inline-block'
            }}>
            <PreviewCompatibleImage imageInfo={item} />
          </div>
        </div>
        <p style={{ textAlign: 'center', margin: '1rem' }}>{item.text}</p>

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
