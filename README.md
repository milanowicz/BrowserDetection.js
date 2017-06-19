# BrowserDetection.js

> This Plug-In required the [jQuery Framework](https://jquery.com/) for execute without errors.

> Bind the script behind the jQuery Framework and his Plug-Ins.


This Plug-In checks the following browser features:

* Check if an Browser the Internet Explorer and which version from it.

* Check if Mobile Device is.

    * Android
    * BlackBerry
    * iOS
    * Opera
    * Windows

* Check for the Browser Type if it an IE, Chrome, Firefox, Opera and Safari.

    * Chrome
    * Firefox
    * Opera
    * Safari

* Check the correct Browser Window Size for Desktop and Mobile.

* Check the Browser language.


## Bower Usage

Install Bower at the first time when you never used it before.

    $ npm install -g bower

Install via Bower

    $ bower install BrowserDetection.js


## Plug-In Namespace

    BrowserDetection
    Detection


### Variables

True by Mobile and false by all other devices.

    isMobile

True by IE and false by another Browser.

    isIE
    
True by MS Edge Browser and false by other Browser.

    isEdge

Default the string is empty.

    isBrowser

Default 100 and by IE the version.

    ieVersion

Browser Language

    Lang

Browser specific language code

    LangCode

Default 0, it used by WindowSize().

    WindowWidth

Default 0, it used by WindowSize().

    WindowHeight


### Methods

Execute all checks from script and init all variables.

    CheckAll()

Check for the Internet Explorer, safe result into variables isIE and ieVersion.

    CheckInternetExplorer()

Check for a Mobile Device, safe result into isMobile.

    CheckMobile()

Check Browser Default Language

    CheckLanguage()

Avoid `console` errors in browsers that lack a console.

    ConsoleWrapper()

Check the Browser Windows size, then safe the results into WindowWidth and WindowHeight.

    WindowSize()


#### Namespace `CheckDevice` Methods

Check different or all device types, if it's a mobile device or not.

    AllMobiles()
    
    AnyDevice()
    
    Android()
    
    BlackBerry()
    
    iOS()
    
    Opera()
    
    Windows()


#### Namespace `CheckBrowser` Methods

Check which Browser is it.

    AllBrowser()
    
    Chrome()
    
    Firefox()
    
    Opera()
    
    Safari()


## Get Started

Contributions are welcome to join the project.

When you're not a developer, then create an issue for your wish feature instead.


### GruntJS

Install GruntJS command line interface at the first time when you never used it before.

	$ npm install -g grunt-cli

Install all NodeJS Modules from Project

	$ npm install

#### Usage

Create a Release

    $ grunt

Look if NodeJS could be updated

    $ grunt devUpdate:show

Update NodeJS Modules

    $ grunt devUpdate:install


## License

The MIT License (MIT) Copyright (c) 2015 Milanowicz

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.