import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
// import styled from 'styled-components';
import LayoutStyles from '../assets/styles/layout-styles';
import Footer from './footer';
import GlobalStyles from './styles/global-styles';

export default function Layout({
  // location,
  // title,
  children,
  className,
  // pageContext,
}) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
        ]}
        title={data.site.siteMetadata.title}
      />

      <LayoutStyles className={className}>
        <div className="container">
          {children}
          <Footer />
        </div>
      </LayoutStyles>
    </>
  );
}
