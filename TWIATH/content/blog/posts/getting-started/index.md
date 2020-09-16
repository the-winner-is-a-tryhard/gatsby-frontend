---
title: Getting Started with the New Gatsby Site
date: "2020-08-08T22:12:03.284Z"
description: "Documentation for creating new content."
author: "Scottie Enriquez"
tag: "Documentation"
---

## Build Status

[![Netlify](https://api.netlify.com/api/v1/badges/4192e85d-f2e4-44c3-855b-4159f9479efd/deploy-status)](https://app.netlify.com/sites/focused-swartz-8c4a84/deploys)

## Overview

The Winner Is a Tryhard is now a Gatsby blog hosted on Netlify replacing the vanilla React frontend and Lambda backend for serving dynamic content. Gatsby uses Markdown (or MDX) syntax for writing blog posts, which should streamline the writing process for everyone. By utilizing the pull request system on GitHub, the publishing process will also be self-service thanks to the Netlify CI/CD tooling. This documentation will cover:

- Creating and configuring your GitHub account and keys
- Setting up your local development environment for Gatsby
- Cloning the project to your local machine
- Creating a new post
- Writing the post using Markdown
- Submitting a pull request

## Creating and Configuring Your GitHub Account

If you don't have an account already, [join here](https://github.com/join). After that, submit a request to join [The Winner Is a Tryhard on GitHub](https://github.com/the-winner-is-a-tryhard). Once you have been added, you will have permission to modify existing Git repositories and create new ones.

## Setting Up Your Development Environment

Make sure you have the following software installed:

- Git
- Node.js
- A code editor like Visual Studio Code
- A terminal emulator like iTerm 2 for macOS, Git BASH for Windows, etc.

Test to make sure your software is installed correctly by running a few commands. Assuming the following statements return version numbers instead of throwing errors, everything installed successfully.

```shell
git --version
node --version
npm --version
```

Next, install the Gatsby CLI like so:

```shell
npm i -g gatsby-cli
```

## Configuring SSH Keys and Git

In order to push commits to the remote origin from your local machine, you'll need to [create a new SSH key](https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and [add the key to your account](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account). Set up your global name and email on your machine as well.

```shell
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
```

## Cloning the Repository and Starting the Web Server

With the previous steps completed, you can now clone the repository to your local machine and start the local web server.

```shell
git clone git@github.com:the-winner-is-a-tryhard/gatsby-frontend.git
cd TWIATH
gatsby develop
```

Navigate to `http://localhost:8000` in the browser.

## Creating a New Branch

If your terminal or editor doesn't automatically show you which branch you're working in, use the `git status` command to find out. Don't commit any new posts directly to the `main` branch. Instead, create a new branch for a specific purpose (i.e., `scottie-power-rankings-week-one`) locally and push it to the remote origin.

```shell
git checkout -b scottie-power-rankings-week-one
git push origin -u scottie-power-rankings-week-one
```

## Creating a New Post

Use the [power rankings CLI](/posts/power-rankings-cli/) to generate new posts. The generated template lists each league member with fantasy football data from Sleeper and their avatars stored on a private CDN.

```markdown
---
title: "Scottie's Week One Power Rankings"
date: "2020-08-22T21:54:41.559Z"
description: "Scottie's dope power rankings."
author: "Scottie Enriquez"
tag: "Power Rankings"
---

## <img src="https://twiath-site-cdn.s3.amazonaws.com/nfl_dal-one-scottie" class="sleeper-avatar"/> 🏆‼️ | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/1bac27b3e88d08f050e32b48195acf46-one-scottie" class="sleeper-avatar"/> markhambone | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/400266e997f2d0857da2c8f2b939fda4-one-scottie" class="sleeper-avatar"/> BigOleDoinks | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/405213591fe488220f2f4f79d9cc28eb-one-scottie" class="sleeper-avatar"/> Glizzy Guzzlers | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/379f5379a3205b9706e6a4b7b4471a8e-one-scottie" class="sleeper-avatar"/> Manhattan (KS) Miracles | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/1fe089e517448d9fe207b8607ca8e81b-one-scottie" class="sleeper-avatar"/> jyarrow | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/49b1d67d6b1562f8ef7d03645a046694-one-scottie" class="sleeper-avatar"/> Bijan Mustard | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/23fe4994d864928df8f99d56b60c9179-one-scottie" class="sleeper-avatar"/> lrich91 | 0-0W/L | 0PF

## K(icker) Man | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/d57bddeb09e102a2b7556973dc6301fb-one-scottie" class="sleeper-avatar"/> Court is in Sutton | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/61bfca158073b2dda70f755d92aacad9-one-scottie" class="sleeper-avatar"/> CDC Lamb | 0-0W/L | 0PF

## <img src="https://twiath-site-cdn.s3.amazonaws.com/320f9195b391718105e27b8cc9d40277-one-scottie" class="sleeper-avatar"/> almostwinning | 0-0W/L | 0PF
```

## Using Markdown

The section wrapped in `---` is called the slug. It contains metadata for querying posts using GraphQL. `##` wraps proceeding text in an `<h2>` tag. All other text gets wrapped in a `<p>` tag. [Markdown offers many powerful features](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) such as embedding images, creating hyperlinks, and adding syntax highlighting. The site can serve image content as well. You can add an image file to the same directory as the `index.md` and embed using a local path (i.e., `![Image description](./image.png)` in `index.md` for the directory below).

```shell
├── assets
│   └── champion.png
└── blog
    └── posts
        └── getting-started
            ├── image.png
            └── index.md
```

## MDX

This Gatsby site is configured to support MDX. MDX adds a new dimension of features in Markdown pages by seamlessly integrating JSX, which allows for writing HTML inside of JavaScript statements.

```jsx
const element = <h1>Hello, world!</h1>
```

Markdown syntax is simple and allows for content structuring, but the ability to write JavaScript inside of it allows for dynamic content such as charts and HTTP calls. The MDX syntax for adding React components is straightforward.

```markdown
import MyReactComponent from '../src/components/myReactComponent'

# H1 Text

This gets wrapped in a <p> tag.

<MyReactComponent input={'Hello, world!'} />
```

## Committing, Pushing, and Submitting a Pull Request

Once you've finished writing your content, publishing your changes is automated via CI/CD. First, commit and push to your branch.

```shell
git add .
git commit -m "Adding my super thoughtful power rankings"
git push origin scottie-power-rankings-week-one
```

From the GitHub web UI, open a pull request and select your branch with the changes. Add `@scottenriquez` or `@callentrail` as reviewers. Once we approve, your post will be published via Netlify's integration.
