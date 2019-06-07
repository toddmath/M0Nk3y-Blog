/* eslint-disable react/no-danger */
import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  const { html, theme } = props;

  return (
    <React.Fragment>
      <footer className="footer" dangerouslySetInnerHTML={{ __html: html }} />

      {/* --- STYLES --- */}
      <style jsx>
        {`
          .footer {
            background: ${theme.color.neutral.white};
            padding: ${theme.space.inset.default};
            padding-top: 0;
            padding-bottom: 120px;

            :global(ul) {
              list-style: none;
              text-align: center;
              padding: 0;

              :global(li) {
                color: ${theme.color.neutral.gray.a};
                font-size: ${theme.font.size.xxs};
                padding: ${theme.space.xxs} ${theme.space.s};
                position: relative;
                display: inline-block;

                &::after {
                  content: "•";
                  position: absolute;
                  right: ${`calc(${theme.space.xs} * -1)`};
                }
                &:last-child::after {
                  content: "";
                }
              }
            }
          }

          @from-width desktop {
            .footer {
              padding: 0 1em 1.5em;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

Footer.propTypes = {
  html: PropTypes.string, // eslint-disable-line react/require-default-props
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Footer;
