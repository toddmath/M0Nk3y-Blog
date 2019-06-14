/* eslint-disable react/jsx-closing-bracket-location */
import React from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
  PocketIcon
} from "react-share";

import config from "../../../content/meta/config";

const PostShare = (props) => {
  const {
    post: {
      fields: { slug },
      frontmatter: { title },
      excerpt
    },
    theme
  } = props;

  const url = config.siteUrl + config.pathPrefix + slug;

  const iconSize = 36;
  const filter = (count) => (count > 0 ? count : "");

  return (
    <React.Fragment>
      <div className="share">
        <span className="label">SHARE</span>
        <div className="links">
          <TwitterShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Twitter share"
            }}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
          <FacebookShareButton
            url={url}
            quote={`${title} - ${excerpt}`}
            additionalProps={{
              "aria-label": "Facebook share"
            }}>
            <FacebookIcon round size={iconSize} />
            <FacebookShareCount url={url}>
              {(count) => <div className="share-count">{filter(count)}</div>}
            </FacebookShareCount>
          </FacebookShareButton>
          <LinkedinShareButton
            url={url}
            title={title}
            description={excerpt}
            additionalProps={{
              "aria-label": "LinkedIn share"
            }}>
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
          <PocketShareButton
            url={url}
            additionalProps={{
              "aria-label": "Pocket share"
            }}>
            <PocketIcon round size={iconSize} />
          </PocketShareButton>
          <RedditShareButton
            url={url}
            title={title}
            additionalProps={{
              "aria-label": "Reddit share"
            }}>
            <RedditIcon round size={iconSize} />
            <RedditShareCount url={url}>
              {(count) => <div className="share-count">{filter(count)}</div>}
            </RedditShareCount>
          </RedditShareButton>
          <EmailShareButton url={url} subject={title} body={excerpt}>
            <EmailIcon round size={iconSize} />
          </EmailShareButton>
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>
        {`
          .share {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .links {
            display: flex;
            flex-direction: row;

            :global(.SocialMediaShareButton) {
              margin: 0 0.8em;
              cursor: pointer;
            }
          }

          .label {
            font-size: 1.2em;
            margin: 0 1em 1em;
          }

          @from-width tablet {
            .share {
              flex-direction: row;
              margin: ${theme.space.inset.l};
            }
            .label {
              margin: ${theme.space.inline.m};
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

PostShare.propTypes = {
  post: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default PostShare;
