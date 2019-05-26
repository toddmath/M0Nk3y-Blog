import React from "react";
import PropTypes from "prop-types";
import PageTransition from 'gatsby-plugin-page-transitions';

import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title }
    },
    theme
  } = props;

  return (
    <React.Fragment>
    <PageTransition>
      <header>
        <Headline title={title} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      </PageTransition>
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Page;
