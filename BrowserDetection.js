/*!
 * BrowserDetection.js
 * Author: Milanowicz
 * Homepage: https://github.com/Milanowicz
 * License: MIT
 * Date: 2017-06-19
 */
(function (w, $, Browser) {

    'use strict';

    /**
     * BrowserDetection.js Library
     *
     * @namespace Detection
     * @desc Detection Browser object
     * @version 0.2.0
     */
    w.BrowserDetection = w.BrowserDetection || {

        /**
         * Mobile check variable.
         *
         * @type {boolean}
         * @global
         */
        isMobile: false,

        /**
         * Internet Explorer check variable.
         *
         * @type {boolean}
         * @global
         */
        isIE: false,

        /**
         * Internet Explorer Edge check variable.
         *
         * @type {boolean}
         * @global
         */
        isEdge: false,

        /**
         * Browser Type.
         *
         * @type {string}
         * @global
         */
        isBrowser: '',

        /**
         * Internet Explorer Version.
         *
         * @type {number}
         * @global
         */
        ieVersion: 1000,

        /**
         * Browser Language.
         *
         * @type {string}
         * @global
         */
        Lang: 'en',

        /**
         * Browser Language Code.
         *
         * @type {string}
         */
        LangCode: 'en-us',

        /**
         * Browser width width.
         *
         * @type {number}
         * @global
         */
        WindowWidth: 0,

        /**
         * Browser width width.
         *
         * @type {number}
         * @global
         */
        WindowWidthOuter: 0,

        /**
         * Browser width height.
         *
         * @type {number}
         * @global
         */
        WindowHeight: 0,

        /**
         * Browser width height.
         *
         * @type {number}
         * @global
         */
        WindowHeightOuter: 0,


        /**
         * Call all Detection functions.
         *
         * @return void
         */
        CheckAll: function () {

            w.BrowserDetection.ConsoleWrapper();
            w.BrowserDetection.CheckMobile();
            w.BrowserDetection.CheckLanguage();

            if (!w.BrowserDetection.isMobile) {
                w.BrowserDetection.CheckInternetExplorer();
            }

            w.BrowserDetection.CheckBrowser.AllBrowser();
            w.BrowserDetection.WindowSize();
            w.BrowserDetection.WindowSizeOuter();

        },


        /**
         * Check if the browser is on mobile device.
         *
         * @return void
         */
        CheckMobile: function () {

            if (typeof($) === 'undefined') {
                w.console.log('jQuery Framework required!');
                return;
            }

            w.BrowserDetection.isMobile = w.BrowserDetection.CheckDevice.AnyDevice();

        },


        /**
         * @namespace CheckDevice
         */
        CheckDevice: {

            /**
             * Check all Mobile Devices by a RegEx string
             * @returns {boolean}
             */
            AllMobiles: function () {
                if (typeof($) === 'undefined') {
                    w.console.log('jQuery Framework required!');
                    return false;
                }
                /**
                 * Mobile Device Detection for jQuery
                 * http://detectmobilebrowsers.com/
                 */
                return ($.browser = $.browser || {}).mobile = /(tablet|ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(Browser) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Browser.substr(0, 4));
            },

            /**
             * Execute all Tests from this Namespace to be sure is a Mobile device or not.
             *
             * @returns {boolean}
             * @constructor
             */
            AnyDevice: function () {
                if (w.BrowserDetection.CheckDevice.AllMobiles() === false) {
                    return (
                    w.BrowserDetection.CheckDevice.Android() ||
                    w.BrowserDetection.CheckDevice.BlackBerry() ||
                    w.BrowserDetection.CheckDevice.iOS() ||
                    w.BrowserDetection.CheckDevice.Opera() ||
                    w.BrowserDetection.CheckDevice.Windows()
                    );
                } else {
                    return true;
                }
            },

            /**
             * Check if is an Android device
             * @returns {boolean}
             */
            Android: function () {
                return (Browser.match(/Android/i)) ? true : false;
            },

            /***
             * Check if is a BlackBerry device
             * @returns {boolean}
             */
            BlackBerry: function () {
                return (Browser.match(/BlackBerry/i)) ? true : false;
            },

            /**
             * Check if is an iOS device
             * @returns {boolean}
             */
            iOS: function () {
                return (Browser.match(/iPhone|iPad|iPod/i)) ? true : false;
            },

            /**
             * Check if is an Opera device
             * @returns {boolean}
             */
            Opera: function () {
                return (Browser.match(/Opera Mini/i)) ? true : false;
            },

            /**
             * Check if is a Microsoft Windows device
             * @returns {boolean}
             */
            Windows: function () {
                return (Browser.match(/IEMobile/i)) ? true : false;
            }
        },


        /**
         * @namespace CheckBrowser
         */
        CheckBrowser: {

            /**
             * Check all Browser and save type in global variable
             * @return void
             */
            AllBrowser: function () {
                if (w.BrowserDetection.isIE) {
                    w.BrowserDetection.isBrowser = 'IE';
                } else if (w.BrowserDetection.CheckBrowser.Chrome()) {
                    w.BrowserDetection.isBrowser = 'Chrome';
                } else if (w.BrowserDetection.CheckBrowser.Firefox()) {
                    w.BrowserDetection.isBrowser = 'Firefox';
                } else if (w.BrowserDetection.CheckBrowser.Opera()) {
                    w.BrowserDetection.isBrowser = 'Opera';
                } else if (w.BrowserDetection.CheckBrowser.Safari()) {
                    w.BrowserDetection.isBrowser = 'Safari';
                }
            },

            /**
             * Check if is a Google Chrome browser
             * @returns {boolean}
             */
            Chrome: function () {
                return (Browser.match(/Chrome/i)) ? true : false;
            },

            /**
             * Check if is a Mozilla Firefox browser
             * @returns {boolean}
             */
            Firefox: function () {
                return (Browser.match(/Firefox/i)) ? true : false;
            },

            /**
             * Check if is an Opera browser
             * @returns {boolean}
             */
            Opera: function () {
                return (Browser.match(/Opera/i)) ? true : false;
            },

            /**
             * Check if is an Apple Safari browser
             * @returns {boolean}
             */
            Safari: function () {
                return (Browser.match(/Safari/i)) ? true : false;
            }
        },


        /**
         * Detection from Internet Explorer and his version.
         *
         * @return void
         */
        CheckInternetExplorer: function () {

            var RegEx, UserAgent, HtmlTag;

            /**
             * Check Internet Explorer under equal Version 10
             */
            if (navigator.appName === 'Microsoft Internet Explorer') {

                // RegEx to find the IE version number
                RegEx = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
                UserAgent = navigator.userAgent;

                /**
                 * Find version number by regEx through the userAgent
                 * Then set it to a variable and to the HTML Element Tag
                 */
                if (RegEx.exec(UserAgent) !== null) {

                    w.BrowserDetection.isIE = true;

                    // Extract version number
                    w.BrowserDetection.ieVersion = parseInt(RegExp.$1);

                    // Get HTML tag element
                    HtmlTag = document.getElementsByTagName('html')[0];

                    // Append html tag by an ie class
                    HtmlTag.className = HtmlTag.className || "";
                    HtmlTag.className += ' ie' + w.BrowserDetection.ieVersion;

                }


			/**
             * Check Internet Explorer OVER EQUAL Version 11
             */
            } else if (navigator.appName === 'Netscape') {

                // RegEx to find the IE version number
                RegEx = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                UserAgent = navigator.userAgent;

                /**
                 * Find version number by regEx through the userAgent
                 * Then set it to a variable and to the HTML Element Tag
                 */
                if (RegEx.exec(UserAgent) !== null) {

                    w.BrowserDetection.isIE = true;

                    // Extract version number
                    w.BrowserDetection.ieVersion = parseInt(RegExp.$1);

                    // Get HTML tag element
                    HtmlTag = document.getElementsByTagName('html')[0];

                    // Append html tag by an ie class
                    HtmlTag.className = HtmlTag.className || "";
                    HtmlTag.className += ' ie' + w.BrowserDetection.ieVersion;

                }

                // Check if Browser is Edge
                RegEx = new RegExp("Edge/([0-9]{1,}[.0-9]{0,})");
                if (RegEx.exec(UserAgent) !== null) {

                    w.BrowserDetection.isIE = true;
                    w.BrowserDetection.isEdge = true;

                    // Extract version number
                    w.BrowserDetection.ieVersion = parseInt(RegExp.$1);

                    // Get HTML tag element
                    HtmlTag = document.getElementsByTagName('html')[0];

                    // Append html tag by an ie class
                    HtmlTag.className = HtmlTag.className || "";
                    HtmlTag.className += ' ie' + w.BrowserDetection.ieVersion;
                }
            }
        },


        /**
         * Check Browser Default Language.
         *
         * @return void
         */
        CheckLanguage: function () {
            try {

                (function (a) {

                    w.BrowserDetection.Lang = a.substr(0, 2).toLowerCase();
                    w.BrowserDetection.LangCode = a.toLowerCase();

                })(window.navigator.userLanguage || window.navigator.language);

            } catch (e) {
                w.BrowserDetection.Lang = 'en';
                w.BrowserDetection.LangCode = 'en-us';
                w.console.log(e);
            }
        },


        /**
         * Avoid `console` errors in browsers that lack a console.
         *
         * @see https://github.com/h5bp/html5-boilerplate/blob/master/src/js/plugins.js
         * @return void
         */
        ConsoleWrapper: function () {

            var method;
            var noop = function () {};

            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            var console = (window.console = window.console || {});

            while (length--) {
                method = methods[length];

                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
        },


        /**
         * Get real window size.
         *
         * @return void
         */
        WindowSize: function () {

            w.BrowserDetection.WindowWidth = window.innerWidth;
            w.BrowserDetection.WindowHeight = window.innerHeight;

        },

        /**
         *
         * @return void
         */
        WindowSizeOuter: function () {
            if (typeof($) === 'undefined') {
                w.console.log('jQuery Framework required!');
                return;
            }
            w.BrowserDetection.WindowWidth = $(window).width();
            w.BrowserDetection.WindowHeight = $(window).height();
        }
    };

    if (typeof(Detection) === 'undefined') {
        w.Detection = w.BrowserDetection;
    }

})(window, jQuery, navigator.userAgent || navigator.vendor || window.opera);