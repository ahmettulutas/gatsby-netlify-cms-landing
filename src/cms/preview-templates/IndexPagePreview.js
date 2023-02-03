import React from 'react';
import PropTypes from 'prop-types';
import { IndexPageTemplate } from '../../templates/index-page';
import { Loading } from '../../components/Loading';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log('index PREVİEW ', data);
  if (data)
    return (
      <IndexPageTemplate
        image={getAsset(data.featuredImage)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        about={data.about || {}}
      />
    );

  else
    return <Loading />;

};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
