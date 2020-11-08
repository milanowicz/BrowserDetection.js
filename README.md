# BrowserDetection.js

![Test](https://github.com/Milanowicz/BrowserDetection.js/workflows/Build/badge.svg?branch=dev)

![Branches](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/dev/.github/badge-branches.svg)
![Functions](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/dev/.github/badge-functions.svg)
![Lines](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/dev/.github/badge-lines.svg)
![Statements](https://raw.githubusercontent.com/Milanowicz/BrowserDetection.js/dev/.github/badge-statements.svg)


## Usage

    const detection = new BrowserDetection(
        window,
        navigator.userAgent || navigator.vendor || window.opera || '',
        navigator.appName || ''
    );


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

    $ npm run test

#### Create release

Create a Release

    $ grunt

Look if NodeJS could be updated

    $ grunt devUpdate:show

Update NodeJS Modules

    $ grunt devUpdate:install

