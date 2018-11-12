// @ts-nocheck
import "typeface-open-sans";
// import "typeface-montserrat";
// import "typeface-poppins";
import FontFaceObserver from "fontfaceobserver";
import PropTypes from "prop-types";
import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { getScreenWidth, timeoutThrottlerHandler } from "../utils/helpers";
import Footer from "../components/Footer/";
import Header from "../components/Header";

export const ThemeContext = React.createContext(null);
export const ScreenWidthContext = React.createContext(0);
export const FontLoadedContext = React.createContext(false);

import themeObjectFromYaml from "../theme/newtheme.yaml";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      font400loaded: false,
      font600loaded: false,
      screenWidth: 0,
      headerMinimized: false,
      theme: themeObjectFromYaml
    };

    if (typeof window !== `undefined`) {
      this.loadFont("font400", "Alegreya", 400);
      this.loadFont("font600", "Montserrat", 700);
    }
  }

  timeouts = {};

  componentDidMount() {
    this.setState({
      screenWidth: getScreenWidth()
    });
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 100, this.resizeHandler);
  };

  resizeHandler = () => {
    this.setState({ screenWidth: getScreenWidth() });
  };

  isHomePage = () => {
    if (this.props.location.pathname === "/") {
      return true;
    }

    return false;
  };

  loadFont = (name, family, weight) => {
    const font = new FontFaceObserver(family, {
      weight: weight
    });

    font.load(null, 10000).then(
      () => {
        console.log(`${name} is available`);
        this.setState({ [`${name}loaded`]: true });
      },
      () => {
        console.log(`${name} is not available`);
      }
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LayoutgQuery {
            pages: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
              sort: { fields: [fields___prefix], order: ASC }
            ) {
              edges {
                node {
                  fields {
                    slug
                    prefix
                  }
                  frontmatter {
                    title
                    menuTitle
                  }
                }
              }
            }
            footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
              id
              html
            }
          }
        `}
        render={data => {
          const { children } = this.props;
          const {
            footnote: { html: footnoteHTML },
            pages: { edges: pages }
          } = data;

          return (
            <ThemeContext.Provider value={this.state.theme}>
              <FontLoadedContext.Provider value={this.state.font400loaded}>
                <ScreenWidthContext.Provider value={this.state.screenWidth}>
                  <React.Fragment>
                    <Header
                      path={this.props.location.pathname}
                      pages={pages}
                      theme={this.state.theme}
                    />
                    <main>{children}</main>
                    <Footer html={footnoteHTML} theme={this.state.theme} />

                    {/* --- STYLES --- */}
                    <style jsx>{`
                      main {
                        min-height: 80vh;
                      }
                    `}</style>
                    <style jsx global>{`
                      html {
                        box-sizing: border-box;
                      }
                      *,
                      *:after,
                      *:before {
                        box-sizing: inherit;
                        margin: 0;
                        padding: 0;
                      }
                      body {
                        font-family: ${this.state.font400loaded
                          ? "Alegreya, serif;"
                          : "open-sans, sans-serif;"};
                      }
                      h1,
                      h2,
                      h3 {
                        font-family: ${this.state.font600loaded
                          ? "Montserrat, sans-serif;"
                          : "Arial, sans-serif;"};
                        font-weight: ${this.state.font600loaded ? 700 : 600};
                        line-height: 1.1;
                        letter-spacing: -0.03em;
                        margin: 0;
                      }
                      h1 {
                        letter-spacing: -0.04em;
                      }
                      p {
                        margin: 0;
                      }
                      strong {
                        font-weight: ${this.state.font600loaded ? 700 : 600};
                      }
                      a {
                        text-decoration: none;
                        color: #666;
                      }
                      main {
                        width: auto;
                        display: block;
                      }
                      progress {
                        vertical-align: baseline;
                      }
                    `}</style>
                  </React.Fragment>
                </ScreenWidthContext.Provider>
              </FontLoadedContext.Provider>
            </ThemeContext.Provider>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;

//eslint-disable-next-line no-undef
/*
export const postQuery = graphql`
  query LayoutQuery {
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    footnote: markdownRemark(fileAbsolutePath: { regex: "/footnote/" }) {
      id
      html
    }
  }
`;

*/
