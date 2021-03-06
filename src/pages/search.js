import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo"; // eslint-disable-line import/no-webpack-loader-syntax

require("core-js/fn/array/find");

const SearchPage = (props) => {
  const {
    data: {
      site: {
        siteMetadata: { algolia, facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {(theme) => (
          <Article theme={theme}>
            <div className="icon">
              <AlgoliaIcon />
            </div>

            <Search algolia={algolia} theme={theme} />
          </Article>
        )}
      </ThemeContext.Consumer>
      <Seo facebook={facebook} />

      {/* --- STYLES --- */}
      <style jsx>
        {`
          .icon {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
            margin-top: 20px;
          }
          .icon :global(svg) {
            height: 26px;
            text-align: center;
            margin: 0 auto;
          }
          @below tablet {
            .icon {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default SearchPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
        facebook {
          appId
        }
      }
    }
  }
`;
