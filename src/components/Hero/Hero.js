import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = (props) => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <small>You&apos;re Visiting:</small>
        <h1>
          Front-End&nbsp;<strong>Web Development</strong> With Todd
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
      </section>

      {/* --- STYLES --- */}
      <style jsx>
        {`
          .hero {
            align-items: center;
            background: ${theme.hero.background};
            background-image: url(${backgrounds.mobile});
            background-size: cover;
            color: ${theme.text.color.primary.inverse};
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            min-height: 100vh;
            height: 100px;
            padding: ${theme.space.inset.l};
            padding-top: ${theme.header.height.homepage};
          }

          small {
            font-family: ${theme.font.family.targetHeading};
            color: ${theme.hero.h1.color};
            font-size: ${theme.font.size.xl};
            font-weight: ${theme.font.weight.bold};
            margin: ${theme.space.stack.s};
          }

          h1 {
            text-align: center;
            font-size: ${theme.hero.h1.size};
            font-variant: ${theme.hero.h1.fontVariant};
            margin: ${theme.space.stack.l};
            color: ${theme.hero.h1.color};
            line-height: ${theme.hero.h1.lineHeight};
            text-remove-gap: both 0 "Poppins";

            :global(strong) {
              position: relative;

              &::after,
              &::before {
                content: "›";
                color: ${theme.text.color.attention};
                margin: 0 ${theme.space.xxs} 0 0;
                text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
              }
              &::after {
                content: "‹";
                margin: 0 0 0 ${theme.space.xxs};
              }
            }
          }

          button {
            background: ${theme.color.brand.dark};
            border: 0;
            border-radius: ${theme.size.radius.large};
            font-size: ${theme.font.size.m};
            padding: ${theme.space.s} ${theme.space.m};
            cursor: pointer;
            width: ${theme.space.xl};
            height: ${theme.space.xl};
            transition: ${theme.time.duration.medium} ease-in-out all;
            transition-delay: 75ms;

            &:focus {
              outline-style: none;
            }

            &:hover {
              background: ${theme.color.brand.darkActive};
              border-radius: ${theme.size.radius.full};
              transition: ${theme.time.duration.medium} ease-in-out all;
            }

            :global(svg) {
              position: relative;
              top: 15px;
              fill: ${theme.color.neutral.white};
              stroke-width: 80;
              stroke: ${theme.color.neutral.white};
              animation-duration: ${theme.time.duration.long};
              animation-name: buttonIconMove;
              animation-iteration-count: infinite;
            }
          }

          @keyframes buttonIconMove {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-30px);
            }
            100% {
              transform: translateY(0);
            }
          }

          @from-width tablet {
            .hero {
              background-image: url(${backgrounds.tablet});
            }

            h1 {
              max-width: 90%;
              font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
            }

            button {
              font-size: ${theme.font.size.l};
            }
          }

          @from-width desktop {
            .hero {
              background-image: url(${backgrounds.desktop});
            }

            h1 {
              max-width: 80%;
              font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
            }

            button {
              font-size: ${theme.font.size.xl};
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Hero;
