// this component is used to add meta tags to the head of the page
// it is used in the layout component

import React from "react";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const SEO = ({
  title,
  description,
  image,
  pathname,
  article,
  noIndex = false,
  noFollow = false,
  children,
}: {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
  article?: boolean;
  noIndex?: boolean;
  noFollow?: boolean;
  children?: React.ReactNode;
}) => {
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername,
    featuredImage,
  } = useSiteMetadata();

  const defaultImage =
    featuredImage?.childImageSharp?.gatsbyImageData?.images.fallback.src;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || "/"}`,
  };

  return (
    <React.Fragment>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta name="twitter:card" content="summary_large_image" />

      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {noIndex && <meta name="robots" content="noindex" />}
      {noFollow && <meta name="robots" content="nofollow" />}

      {children}
    </React.Fragment>
  );
};

export default SEO;
