---
title: Upgrading Gatsby.js Development with GraphQL Playground
category: "tutorials"
cover: graphql_playground1.png
author: Todd Matheson
---

If you've ever spent time developing with [Gatsby.js](https://www.gatsbyjs.org "Gatsby.js homepage"), you know how easy querying the [GraphQL](https://graphql.org "GraphQL homepage") backend is, using the [GraphiQL](https://github.com/graphql/graphiql "GraphiQL github readme") url at [http://localhost:8000/__graphql](http://localhost:8000/___graphql). Anytime you run `gatsby develop`, it serves this nice, yet outdated IDE. Thankfully, it's super easy to upgrade to the newer, and much improved IDE, [GraphQL Playground](http://graphql.nodaljs.com/ "GraphQL Playground homepage").

First, you need to create a simple environment file at the root of you're Gatsby.js project. We'll name this `.env.development`
> Inside you're root directory:

```sh
touch .env.development
```

Easy enough. Now open you're favorite text editor and load the new file. Inside we'll put a single `key=value` pair, instructing Gatsby to use our new IDE, each time you start up the dev server.

> Inside .env.development:

```js
GATSBY_GRAPHQL_IDE=playground
```

That's it 😄. I love it when improvements are easy, fast, and most of all enhance your development experiance. Now you can enjoy multiple tabs and a much more intuitive doc section inside you're new [GraphQL](https://graphql.org) IDE.



