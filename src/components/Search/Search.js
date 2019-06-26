/* eslint-disable react/jsx-closing-bracket-location */
import React from "react";
import PropTypes from "prop-types";
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch/dom";
import { FiSearch } from "react-icons/fi";
import Hit from "./Hit";
// import { FiSearch } from "react-icons/fi";

const Search = (props) => {
  const { algolia, theme } = props;

  return (
    <React.Fragment>
      <div className="search">
        {algolia && algolia.appId && (
          <InstantSearch
            appId={algolia.appId}
            apiKey={algolia.searchOnlyApiKey}
            indexName={algolia.indexName}
            stalledSearchDelay="1">
            <SearchBox translations={{ placeholder: "Search" }} autoFocus />
            <Stats />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        )}
      </div>

      {/* --- STYLES --- */}
      <style jsx global>
        {`
          .ais-SearchBox {
            width: 100%;
          }
          .ais-SearchBox-form {
            position: relative;
            border-bottom: 1px solid ${theme.color.brand.dark};
            display: flex;
            justify-content: space-between;
          }
          .ais-SearchBox-input {
            border: none;
            padding: 0.2em;
            font-size: 1.4em;
            flex-grow: 1;
            outline: none;
          }
          .ais-SearchBox-submit {
            background: none;
            border: none;
            fill: ${theme.color.brand.primaryActive};
            flex-grow: 0;
            width: 2em;
          }
          .ais-SearchBox-submitIcon {
            width: 2em;
            height: auto;
          }
          .ais-SearchBox-reset {
            display: none;
            width: 0;
          }
          .ais-SearchBox-resetIcon {
            width: 0;
            height: 0;
            display: none;
          }
          .ais-Stats {
            margin: 0.5em 0 2em 0.3em;
            font-size: 0.9em;
            color: ${theme.color.brand.primary};
            display: block;
          }
          .ais-Hits-list {
            list-style: none;
            padding: 0;
          }
          .ais-Pagination-list {
            display: flex;
            list-style: none;
            justify-content: center;
            padding: 0;
          }
          .ais-Pagination-item a,
          .ais-Pagination-item span {
            color: ${theme.color.neutral.gray.e};
            font-size: 1.2em;
            display: block;
            padding: 0.5em 0.5em 2em;
          }
          .ais-Pagination-item a:hover {
            color: red;
          }
          .ais-Pagination-item.ais-Pagination-item--firstPage a,
          .ais-Pagination-item.ais-Pagination-item--previousPage a,
          .ais-Pagination-item.ais-Pagination-item--nextPage a {
            padding: 0.4em 0.5em 0.6em;
          }
        `}
      </style>
    </React.Fragment>
  );
};

Search.propTypes = {
  algolia: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  theme: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Search;
