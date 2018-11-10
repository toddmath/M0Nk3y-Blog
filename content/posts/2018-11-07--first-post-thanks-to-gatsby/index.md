---
title: First post brought to you by Gatsby!
category: "tutorials"
cover: light-sky-recreation-japan-festival-fireworks-1016653-pxhere.com.jpg
author: Todd Matheson
---

Welcome to my first blog, ✨ M0Nk3y WebDev:sparkles: !! After witnessing tons of cool blogs written by other developers, learning all sorts of practical tips and gaining incredibly useful knowledge thru thoughtfully written tutorials, it was a no-brainer to me that someday I'd create one, aswell. Surprise, surprise that day is today 😄 . I hope somebody learns something that'll help them create their own web app and further their education towards software development!

For my first post, I'll show you how I created this blog,step by step. After trying multiple different frameworks, [Jekyll](https://jekyllrb.com) 😉 , [WordPress](https://wordpress.org/) 😉 , I finally landed on [Gatsby.js](https://www.gatsbyjs.org/). Although both former frameworks worked well and provided everything necessary to create a nice blog, they weren't flexible enough for what I was after, especially after starting to use [React.js](https://reactjs.org/), [Redux.js](https://redux.js.org/), and [Vue.js](https://vuejs.org/). [Gatsby's](https://www.gatsbyjs.org/) true strength lies in it's component based architect, while mainting static site builds, hence compatability with [Github Pages](https://pages.github.com/ "Github Pages Homepage")😼 , and other free repo web hosts. So, without further ado, here's the steps I took to build this blog using the fantastic 🛠 [gatsby.js](https://www.gatsbyjs.org/):

## Installing gatsby-cli

1. First we use [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/en/) to install [gatsby-cli](https://www.gatsbyjs.org/docs/gatsby-cli/).

>[Gatsby-cli](https://www.gatsbyjs.org/docs/gatsby-cli/) will be installed globally, meaning we'll be able to use this tool to install different starter sites anywhere we want 😄

#### NPM:
```bash
$ npm install --global gatsby-cli
```
#### Yarn:
```bash
$ yarn add gatsby-cli --global
```

2. Now we use gatsby-cli to create a new project.
>We need a dir to build our projects. It's up to you where ever that is, I made mine ~/gatsby . After moving into our new dir we call up gatsby to create a new project. First we'll make their sample one, to see how to structure our site folders, etc.
```bash
$ mkdir ~/gatsby
$ cd ~/gatsby
$ gatsby new gatsby-site
$ cd gatsby-site
$ ls -lta
```
> Now we can use gatsby to serve our site _locally_ and any changes me make to the files will be _**hot-loaded** automatically_ to our browser. Our site will be available at **_http://localhost:8000_**.
```bash
$ gatsby develop
```
