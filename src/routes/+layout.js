export const load = ({ url }) => {
  const baseMetaTags = Object.freeze({
	titleTemplate: '%s | Brian J. Lange', // Default title template.
	description: 'For Your Information ℹ️ The hypertext pages of Brian J. Lange',
    canonical: new URL(url.pathname, url.origin).href,
    openGraph: {
      type: 'website',
      url: new URL(url.pathname, url.origin).href,
    }
  })

  return {
    baseMetaTags
  };
};