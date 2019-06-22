/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
import PropTypes from "prop-types";

import StopIcon from "!svg-react-loader!../images/svg-icons/stop.svg"; // eslint-disable-line import/no-webpack-loader-syntax
import "./404.css";

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <StopIcon className="icon" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;
