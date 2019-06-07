import React from "react";
import PropTypes from "prop-types";

const Headline = (props) => {
  const { title, children, theme } = props;

  return (
    <React.Fragment>
      {title ? <h1> {title} </h1> : <h>{children}</h>}

      {/* --- STYLES --- */}
      <style jsx>
        {`
          h1 {
            font-size: ${theme.font.size.xxl};
            margin: ${theme.space.stack.m};
            animation-name: headlineEntry;
            animation-duration: ${theme.time.duration.long};

            :global(span) {
              font-weight: ${theme.font.weight.standard};
              display: block;
              font-size: ${theme.font.size.s};
              letter-spacing: 0;
              margin: ${theme.space.stack.s};
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
              font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
            }
          }

          @from-width desktop {
            h1 {
              font-size: ${`calc(${theme.font.size.xl} * 1.8)`};
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string, // eslint-disable-line react/require-default-props
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Headline;
