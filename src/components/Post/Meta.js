import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { FaCalendar } from "react-icons/fa/";
import { FaUser } from "react-icons/fa/";
import { FaTag } from "react-icons/fa/";

const Meta = (props) => {
  const { prefix, author: authorName, category, theme } = props;

  return (
    <p className="meta">
      <span>
        <FaCalendar size={18} /> {prefix}
      </span>
      <span>
        <FaUser size={18} /> {authorName}
      </span>
      {category && (
        <span>
          <FaTag size={18} />
          <Link to={`/category/${category.split(" ").join("-")}`}>{category}</Link>
        </span>
      )}

      {/* --- STYLES --- */}
      <style jsx>
        {`
          @from-width desktop {
            .meta {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              font-size: 0.9em;
              margin: ${`calc(${theme.space.l} * 1.5) 0 ${theme.space.s}`};
              background: transparent;

              :global(svg) {
                fill: ${theme.color.brand.primaryActive};
                margin: ${theme.space.inline.s};
              }
              span {
                align-items: center;
                display: flex;
                text-transform: uppercase;
                margin: ${theme.space.xs} ${theme.space.xl} ${theme.space.xs} 0;
              }
            }
          }
          @from-width tablet {
            .meta {
              display: flex;
              flex-flow: row wrap;
              justify-content: center;
              font-size: 0.9em;
              margin: ${`calc(${theme.space.m} * 1.5) 0 ${theme.space.m}`};
              background: transparent;

              :global(svg) {
                fill: ${theme.color.brand.primaryActive};
                margin: ${theme.space.inline.xs};
              }

              span {
                align-items: center;
                display: flex;
                text-transform: uppercase;
                margin: ${theme.space.xs} ${theme.space.m} ${theme.space.xs} 0;
              }
            }
          }
          @below tablet {
            .meta {
              display: flex;
              flex-flow: row wrap;
              justify-content: start;
              font-size: 0.6em;
              margin: ${`calc(${theme.space.s} * 1.5) 0 ${theme.space.s}`};
              background: transparent;

              :global(svg) {
                fill: ${theme.color.brand.primaryActive};
                margin: ${theme.space.inline.xs};
              }

              span {
                align-items: center;
                display: flex;
                text-transform: uppercase;
                margin: ${theme.space.xs} ${theme.space.s} ${theme.space.xs} 0;
              }
            }
          }
        `}
      </style>
    </p>
  );
};

Meta.propTypes = {
  prefix: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string, // eslint-disable-line react/require-default-props
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Meta;
