---
title: Getting Started with the New Gatsby Site 
date: "2020-08-08T22:12:03.284Z"
description: "Documentation for creating new content."
author: "Scottie Enriquez"
---

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
- Git (and Git BASH for Windows)
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
```
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
TBD

## Creating a New Post
TBD

## Using Markdown
TBD

## MDX
TBD

## Submitting a Pull Request
TBD