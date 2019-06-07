/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import "gatsby-remark-vscode-embed/style.css";
import "prismjs/themes/prism-tomorrow.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
import Comments from "./Comments";
import NextPrev from "./NextPrev";

const Share = asyncComponent(() =>
  import("./Share")
    .then((module) => module.default)
    .catch((error) => {})
);

const Post = (props) => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, author, category }
    },
    authornote,
    facebook,
    next: nextPost,
    prev: prevPost,
    theme
  } = props;

  return (
    <React.Fragment>
      <header>
        <Headline title={title} theme={theme} />
        <Meta prefix={prefix} author={author} category={category} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <Author note={authornote} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
        <Comments slug={slug} facebook={facebook} theme={theme} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  next: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  prev: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Post;
