import PropTypes from "prop-types";
import React from "react";

import Item from "./Item";

const Blog = (props) => {
  const { posts, theme } = props;

  return (
    <React.Fragment>
      <main className="main">
        <ul>
          {posts.map((post) => {
            const {
              node,
              node: {
                fields: { slug }
              }
            } = post;
            return <Item key={slug} post={node} theme={theme} />;
          })}
        </ul>
      </main>

      {/* --- STYLES --- */}
      <style jsx>
        {`
          .main {
            padding: 0 ${theme.space.inset.default};
          }

          ul {
            list-style: none;
            margin: 0 auto;
            padding: ${`calc(${theme.space.default} * 2 .2) 0 calc(${theme.space.default} * 1.2)`};
          }

          @above tablet {
            .main {
              padding: 0 ${`0 calc(${theme.space.default} * 1.5)`};
            }
            ul {
              max-width: ${theme.text.maxWidth.tablet};
            }
          }
          @above desktop {
            ul {
              max-width: ${theme.text.maxWidth.desktop};
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Blog;
