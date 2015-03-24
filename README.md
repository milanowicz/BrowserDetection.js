# BrowserDetection.js

Here are checks for the Internet Explorer, Mobile Devices and Browser Window Size.
jQuery Framework ist required to excute without errors.


## Usage

Bind the script behind the jQuery Framework and his Plug-Ins.

### Namespace

    BrowserDetection
    Detection


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


### Variables

True by Mobile and false by all other devices.

    isMobile

True by IE and false by another Browser.

    isIE

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

	
# Bower

Install Bower at the first time when you never used it before.

    $ npm install -g bower

Install via Bower

    $ bower install BrowserDetection.js


# GruntJS

Install GruntJS command line interface at the first time when you never used it before.

	$ npm install -g grunt-cli

Install all NodeJS Modules from Project

	$ npm install

## Usage

Create a Release

    $ grunt

Look if NodeJS could be updated

    $ grunt devUpdate:show

Update NodeJS Modules

    $ grunt devUpdate:install
