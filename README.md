<h2 align="center"> 
  :newspaper: Ignews
</h1>

<p align="center">
  <a href="https://www.linkedin.com/in/frank-laercio/">
    <img alt="Made by franklaercio" src="https://img.shields.io/badge/Linkedin-Made%20by%20franklaercio-blue">
  </a>
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/franklaercio/ig-news?color=%2304D361">
  
  <a href="https://github.com/franklaercio/ig-news/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/franklaercio/ig-news">
  </a>
  
  <img alt="Code size" src="https://img.shields.io/github/languages/code-size/franklaercio/ig-news">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/franklaercio/ig-news/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/franklaercio/ig-news?style=social">
  </a>
</p>

## :bookmark_tabs: Resume of application

This is a private blog. It's possible create content with a CMS and receive for subscription an app. The project is a part of Ignite of Rocktseat and use the follow technologies:
* Next.js
* Stripe
* Prismic
* Github Auth 

<p align="center">
  <img alt="Home" width="98%" src="screenshots/screenshot-localhost_3000-2021.06.01-00_56_13.png" />
  <img alt="Posts" width="49%" src="screenshots/screenshot-localhost_3000-2021.06.01-00_57_06.png" />
  <img alt="Post" width="49%" src="screenshots/screenshot-localhost_3000-2021.06.01-00_57_31.png" />
  <img alt="Posts" width="49%" src="screenshots/screenshot-localhost_3000-2021.06.01-01_45_06.png" />
  <img alt="Post" width="49%"src="screenshots/screenshot-checkout.stripe.com-2021.06.01-01_02_15.png" />
</p>

## 🎲 Running the project

```bash
# Clone this repository
$ git clone https://github.com/franklaercio/ig-news

# Access the project folder in the terminal/cmd
$ cd ig-news

# Set environment
$ cp .env.example .env.local

# Compile the code
$ yarn

# Run stripe webhook and set STRIPE_WEBHOOK_SECRET on .env.local
$ stripe listen --forward-to localhost:3000/api/webhooks 

# Run the application
$ yarn dev
```

## :man_technologist: Authors

* **Frank Laércio** - [franklaercio](https://github.com/franklaercio)

See also the list of [contributors](https://github.com/franklaercio/ig-news/contributors) who participated in this project.

## :clipboard: License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## :newspaper: Acknowledgments

- Next.js

