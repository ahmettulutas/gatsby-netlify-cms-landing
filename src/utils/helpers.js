import { graphql, useStaticQuery } from 'gatsby';

export const normalizeTurkishPhone = str => {
  // Filter only numbers from the input
  let cleaned = (`${str}`).replace(/\D/g, '');
  cleaned = cleaned.slice(2, cleaned.length);

  if (cleaned && cleaned.length <= 3)
    return `+90 ${cleaned}`;
  else if (cleaned.length <= 6)
    return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  else if (cleaned.length <= 8)
    return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
  else if (cleaned.length >= 9)
    return `+90 ${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
};


// eslint-disable-next-line func-style
function useSiteMetadata () {
  const { site } = useStaticQuery(
    graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
  );
  return site.siteMetadata;
}

export default useSiteMetadata;
