/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";

const Bodytext = (props) => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <div className="bodytext" dangerouslySetInnerHTML={{ __html: html }} />

      <style jsx>
        {`
          .bodytext {
            animation-name: bodytextEntry;
            animation-duration: ${theme.time.duration.long};

            :global(h2),
            :global(h3) {
              margin: 1.5em 0 1em;
            }

            :global(h2) {
              line-height: ${theme.font.lineHeight.l};
              font-size: ${theme.font.size.xl};
            }

            :global(h3) {
              font-size: ${theme.font.size.l};
              line-height: ${theme.font.lineHeight.l};
            }

            :global(p) {
              font-size: ${theme.font.size.m};
              line-height: ${theme.font.lineHeight.xxl};
              margin: 0 0 1.5em;
            }
            :global(ul) {
              list-style: circle;
              margin: 0 0 1.5em;
              padding: 0 0 0 1.5em;
            }
            :global(li) {
              margin: 0.7em 0;
              line-height: 1.5;
            }
            :global(a) {
              font-weight: ${theme.font.weight.normal};
              color: ${theme.color.brand.primary};
              text-decoration: none;
            }
            :global(a:hover) {
              color: ${theme.color.brand.primaryActive};
            }
            :global(a.gatsby-resp-image-link) {
              border: 0;
              display: block;
              margin: 2.5em 0;
              border-radius: ${theme.size.radius.default};
              overflow: hidden;
              border: 1px solid ${theme.line.color};
            }
            :global(code.language-text) {
              background: ${theme.color.neutral.gray.e};
              text-shadow: none;
              color: inherit;
              padding: 0.1em 0.3em 0.2em;
            }
            :global(pre[class*="language-"]) {
              border-radius: ${theme.size.radius.default};
            }
            :global(div.gatsby-remark-code-title + div.gatsby-highlight > pre[class*="language-"]) {
              border-top-left-radius: 0 !important;
              border-top-right-radius: 0 !important;
              border-bottom-left-radius: ${theme.size.radius.default};
              border-bottom-right-radius: ${theme.size.radius.default};
              margin-top: 0;
            }
            :global(div.gatsby-remark-code-title) {
              margin-bottom: 0;
              padding: 0.5rem 1em;
              z-index: 0;
              background-color: ${theme.color.neutral.gray.i};
              color: ${theme.color.neutral.white};
              border-top-left-radius: ${theme.size.radius.large};
              border-top-right-radius: ${theme.size.radius.large};
            }
            :global(code[class*="language-"], pre[class*="language-"]) {
              font-size: ${theme.font.size.s};
            }
          }

          @keyframes bodytextEntry {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Bodytext;
