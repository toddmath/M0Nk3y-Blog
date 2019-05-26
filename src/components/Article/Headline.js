import React from "react";
import PropTypes from "prop-types";
import PageTransition from 'gatsby-plugin-page-transitions';

const Headline = props => {
  const {
    title,
    children,
    theme
  } = props;

  return (
  <React.Fragment>
  <PageTransition>
   { title ? <h1> { title } </h1> : <h>{children}</h> }

    {/* --- STYLES --- */}
    <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: ${theme.font.size.m};
            letter-spacing: 0;
            margin: ${theme.space.stack.l};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `} </style>
      </PageTransition>
      </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
