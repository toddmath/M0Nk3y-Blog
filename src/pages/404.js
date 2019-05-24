import React from "react";
import { ThemeContext } from "../layouts";
import Article from "../components/Article/";
import Headline from "../components/Article/Headline";


const NotFoundPage = () => {
return (
  <React.Fragment>
    <ThemeContext.Consumer>
      {theme => (
        <Article theme={theme}>
          <div class="404_container">
            <h1 class="not_found">NOT FOUND</h1>
            <p class="sadness">You just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </Article>
      )}
    </ThemeContext.Consumer>
    {/* --- STYLES --- */}
    <style jsx>{`
        .404_container {
          margin-top: 8rem;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          height: auto;
          display: flex;
        }
        .not_found {
          font-size: 2em;
          font-weight: bold;
        }
        .sadness {
          font-weight: normal;
          font-size: 1.5em;
          color: #f56565;
        }
    `}</style>
  </React.Fragment>
);
};

export default NotFoundPage;
/*
const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
*/