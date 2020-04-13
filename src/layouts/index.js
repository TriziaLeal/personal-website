import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import FontFaceObserver from 'fontfaceobserver';


import Navigation from '../components/Common/Navigation';
import About from '../components/FrontPageSection/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './index.css';
import '../fonts/Lato/latofonts.css';
import './custom-style.css';

const latoObserver = new FontFaceObserver('LatoWeb', {});
// When Lato is loaded, add a font-family using Lato to the body
latoObserver.load().then(
  () => {
    if (typeof document !== `undefined`) {
      document.body.classList.add('fontLoaded');
    }
  },
  () => {
    if (typeof document !== `undefined`) {
      window.document.body.classList.remove('fontLoaded');
    }
  }
);

const RootElement = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
`;

const Layout = ({ children, data }) => (
  <RootElement>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <Navigation/>
      {children()}
      <Footer/>
      
  </RootElement>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
