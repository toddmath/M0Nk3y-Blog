import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import PageTransition from 'gatsby-plugin-page-transitions';

const List = props => {
  const { edges, theme } = props;

  return (
    <React.Fragment>
    <PageTransition>
      <ul>
        {edges.map(edge => {
          const {
            node: {
              frontmatter: { title },
              fields: { slug }
            }
          } = edge;

          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>

      {/* --- STYLES --- */}
      <style jsx>{`
        ul {
          margin: ${theme.space.stack.m};
          padding: ${theme.space.m};
          list-style: circle;
        }
        li {
          padding: ${theme.space.xs} 0;
          font-size: ${theme.font.size.s};
          line-height: ${theme.font.lineHeight.l};
        }
      `}</style>
      </PageTransition>
    </React.Fragment>
  );
};

List.propTypes = {
  edges: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
};

export default List;
