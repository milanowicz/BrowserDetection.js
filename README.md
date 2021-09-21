# BrowserDetection.js

![Test](https://github.com/Milanowicz/BrowserDetection.js/workflows/Build/badge.svg?branch=master)
[![Mutation testing](https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2FMilanowicz%2FBrowserDetection.js%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/Milanowicz/BrowserDetection.js/master)
[![codecov](https://codecov.io/gh/Milanowicz/BrowserDetection.js/branch/master/graph/badge.svg?token=42G6ETI9NV)](https://codecov.io/gh/Milanowicz/BrowserDetection.js)

![](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/master/.github/badge-branches.svg)
![](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/master/.github/badge-functinos.svg)
![](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/master/.github/badge-lines.svg)
![](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/master/.github/badge-statements.svg)

![](https://img.shields.io/github/v/tag/Milanowicz/BrowserDetection.js)
![](https://img.shields.io/npm/v/browser-detection.js)

![](https://img.shields.io/github/repo-size/milanowicz/BrowserDetection.js)
![](https://img.shields.io/github/languages/code-size/milanowicz/BrowserDetection.js)


## Usage

Install it by Yarn or NPM

    $ yarn add browser-detection.js

    $ npm install browser-detection.js


Sample for ES 6 usage:

    import BrowserDetection from 'browser-detection.js/src/BrowserDetection';
    const detection = new BrowserDetection(
        window,
        navigator.userAgent || navigator.vendor || window.opera || '',
        navigator.appName || ''
    );


When ES 5 or what ever, then use one of them:

    browser-detection.js/src/BrowserDetection.js
    browser-detection.js/src/BrowserDetection.min.js


## Description

This Plug-In checks the following browser features:

* Check if an Browser the Internet Explorer and which version from it.

* Check if mobile or desktop Device is.

    * Android
    * Apple
    * BlackBerry
    * iOS
    * Linux
    * Opera
    * Windows

* Check for the Browser Type if it an IE, Chrome, Firefox, Opera and Safari.

    * Chrome
    * Firefox
    * Opera
    * Safari

* Check the Browser language.


## Get Started

Contributions are welcome to join the project.

When you're not a developer, then create an issue for your wish feature instead.


### GruntJS

Install GruntJS command line interface at the first time when you never used it before.

    $ npm install -g grunt-cli

Install all NodeJS Modules from Project

    $ yarn install

Run tests:

    $ npm run tests

#### Create release

Create a Release

    $ grunt

Look if NodeJS could be updated

    $ grunt devUpdate:show

Update NodeJS Modules

    $ grunt devUpdate:install

