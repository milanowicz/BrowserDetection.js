"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * BrowserDetection.js Library
 * Author: Milanowicz
 * Homepage: https://github.com/Milanowicz
 * License: MIT
 * Date: 2020-09-27
 *
 * @desc Detection Browser object
 * @version 1.0.0
 */
module.exports = /*#__PURE__*/function () {
  /**
   * @param {window} window - Window Browser Object.
   * @param {String} userAgent - User Agent String.
   * @param {String} [appName] - App Name from Navigator as String.
   */
  function BrowserDetection(window, userAgent, appName) {
    _classCallCheck(this, BrowserDetection);

    this._name = 'BrowserDetection.js';

    if (typeof window === 'undefined') {
      window = {};
    }

    this._w = window;

    if (typeof userAgent === 'undefined') {
      userAgent = '';
    }

    this._userAgent = userAgent;

    if (typeof appName === 'undefined') {
      this._appName = '';
    } else {
      this._appName = appName;
    }

    this._browserName = '';
    this._isMobile = false;
    this._osType = '';
    this._isIE = false;
    this._isEdge = false;
    this._ieVersion = 100;
    this._lang = 'en';
    this._langCode = 'en-us';
  }
  /**
   * Mobile check variable.
   *
   * @type {boolean}
   */


  _createClass(BrowserDetection, [{
    key: "isMobile",
    value: function isMobile() {
      return this._isMobile;
    }
    /**
     * Internet Explorer check variable.
     *
     * @type {boolean}
     */

  }, {
    key: "isIE",
    value: function isIE() {
      return this._isIE;
    }
    /**
     * Internet Explorer Edge check variable.
     *
     * @type {boolean}
     */

  }, {
    key: "isEdge",
    value: function isEdge() {
      return this._isEdge;
    }
    /**
     * Browser Type.
     *
     * @type {string}
     */

  }, {
    key: "getBrowserName",
    value: function getBrowserName() {
      return this._browserName;
    }
    /**
     * Get Mobile OS Device Type
     *
     * @return {string}
     */

  }, {
    key: "getOsType",
    value: function getOsType() {
      return this._osType;
    }
    /**
     * Internet Explorer Version.
     *
     * @type {number}
     * @global
     */

  }, {
    key: "getIeVersion",
    value: function getIeVersion() {
      return this._ieVersion;
    }
    /**
     * Browser Language.
     *
     * @type {string}
     */

  }, {
    key: "getLanguage",
    value: function getLanguage() {
      return this._lang;
    }
    /**
     * Browser Language Code.
     *
     * @type {string}
     */

  }, {
    key: "getLanguageCode",
    value: function getLanguageCode() {
      return this._langCode;
    }
  }, {
    key: "getUrlComplete",
    value: function getUrlComplete() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.href || '';
    }
  }, {
    key: "getUrlHash",
    value: function getUrlHash() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.hash || '';
    }
  }, {
    key: "getUrlHost",
    value: function getUrlHost() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.host || '';
    }
  }, {
    key: "getUrlHostname",
    value: function getUrlHostname() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.hostname || '';
    }
  }, {
    key: "getUrlOrigin",
    value: function getUrlOrigin() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.origin || '';
    }
  }, {
    key: "getUrlPathname",
    value: function getUrlPathname() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.pathname || '';
    }
  }, {
    key: "getUrlPort",
    value: function getUrlPort() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.port || '';
    }
  }, {
    key: "getUrlProtocol",
    value: function getUrlProtocol() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.protocol || '';
    }
  }, {
    key: "getUrlSearch",
    value: function getUrlSearch() {
      if (typeof this._w.location === 'undefined') {
        return '';
      }

      return this._w.location.search || '';
    }
  }, {
    key: "log",
    value: function log() {
      this.logWindow();
      this.logUrl();
    }
  }, {
    key: "logWindow",
    value: function logWindow() {
      console.log(this._name + ' | Mobile Device', this.isMobile());
      console.log(this._name + ' | OS Type', this.getOsType());
      console.log(this._name + ' | Browser', this.getBrowserName());
      console.log(this._name + ' | MS IE', this.isIE());
      console.log(this._name + ' | MS Edge', this.isEdge());
      console.log(this._name + ' | Language', this.getLanguage());
      console.log(this._name + ' | Language Code', this.getLanguageCode());
    }
  }, {
    key: "logUrl",
    value: function logUrl() {
      console.log(this._name + ' | Complete', this.getUrlComplete());
      console.log(this._name + ' | Hash', this.getUrlHash());
      console.log(this._name + ' | Origin', this.getUrlOrigin());
      console.log(this._name + ' | Search', this.getUrlSearch());
      console.log(this._name + ' | Host', this.getUrlHost());
      console.log(this._name + ' | Pathname', this.getUrlPathname());
      console.log(this._name + ' | Hostname', this.getUrlHostname());
      console.log(this._name + ' | Port', this.getUrlPort());
      console.log(this._name + ' | Protocol', this.getUrlProtocol());
    }
    /**
     * Call all Detection functions.
     *
     * @return {void}
     */

  }, {
    key: "checkAll",
    value: function checkAll() {
      this.consoleWrapper();
      this.checkOperationSystem();
      this.checkLanguage();
      this.checkBrowserInternetExplorer();
      this.checkAllBrowser();
    }
    /**
     * Avoid `console` errors in browsers that lack a console.
     *
     * @see https://github.com/h5bp/html5-boilerplate/blob/master/src/js/plugins.js
     * @return {void}
     */

  }, {
    key: "consoleWrapper",
    value: function consoleWrapper() {
      var method;

      var noop = function noop() {};

      var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
      var length = methods.length;
      var console = this._w.console = this._w.console || {};

      while (length--) {
        method = methods[length]; // Only stub undefined methods.

        if (!console[method]) {
          console[method] = noop;
        }
      }
    }
    /**
     * Check Operation System from Device.
     *
     * @return {void}
     */

  }, {
    key: "checkOperationSystem",
    value: function checkOperationSystem() {
      this._isMobile = this.checkAllMobiles();
      this._osType = '';

      if (this.checkMobileDeviceAndroid()) {
        this._osType = 'Android';
      }

      if (this.checkMobileDeviceBlackBerry()) {
        this._osType = 'Black Berry';
      }

      if (this.checkMobileDeviceiOS()) {
        this._osType = 'Apple';
      }

      if (this.checkMobileDeviceOpera()) {
        this._osType = 'Opera';
      }

      if (this.checkMobileDeviceWindows()) {
        this._osType = 'Windows';
      }

      if (this._osType !== '') {
        this._isMobile = true;
      } else {
        if (this.checkDesktopDeviceApple()) {
          this._osType = 'Apple';
        }

        if (this.checkDesktopDeviceLinux()) {
          this._osType = 'Linux';
        }

        if (this.checkDesktopDeviceWindows()) {
          this._osType = 'Windows';
        }
      }
    }
    /**
     * Check all Mobile Devices by a RegEx string
     * Mobile Device Detection by http://detectmobilebrowsers.com/
     *
     * @return {boolean}
     */

  }, {
    key: "checkAllMobiles",
    value: function checkAllMobiles() {
      return /(tablet|ipad|playbook|silk|android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(this._userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(this._userAgent.substr(0, 4));
    }
    /**
     * Check if is an Android device
     *
     * @returns {boolean}
     */

  }, {
    key: "checkMobileDeviceAndroid",
    value: function checkMobileDeviceAndroid() {
      return !!this._userAgent.match(/Android/i);
    }
    /***
     * Check if is a BlackBerry device
     *
     * @returns {boolean}
     */

  }, {
    key: "checkMobileDeviceBlackBerry",
    value: function checkMobileDeviceBlackBerry() {
      return !!this._userAgent.match(/BlackBerry/i);
    }
    /**
     * Check if is an iOS device
     *
     * @returns {boolean}
     */

  }, {
    key: "checkMobileDeviceiOS",
    value: function checkMobileDeviceiOS() {
      return !!this._userAgent.match(/iPhone|iPad|iPod/i);
    }
    /**
     * Check if is an Opera device
     *
     * @returns {boolean}
     */

  }, {
    key: "checkMobileDeviceOpera",
    value: function checkMobileDeviceOpera() {
      return !!this._userAgent.match(/Opera Mini|Opera Mobi/i);
    }
    /**
     * Check if is a Microsoft Windows device
     * @returns {boolean}
     */

  }, {
    key: "checkMobileDeviceWindows",
    value: function checkMobileDeviceWindows() {
      return !!this._userAgent.match(/IEMobile|Windows Phone/i);
    }
    /**
     * Check if is a Apple device
     * @returns {boolean}
     */

  }, {
    key: "checkDesktopDeviceApple",
    value: function checkDesktopDeviceApple() {
      return !!this._userAgent.match(/Macintosh/i);
    }
    /**
     * Check if is a GNU/Linux
     * @returns {boolean}
     */

  }, {
    key: "checkDesktopDeviceLinux",
    value: function checkDesktopDeviceLinux() {
      return !!this._userAgent.match(/Linux/i);
    }
    /**
     * Check if is a Microsoft Windows device
     * @returns {boolean}
     */

  }, {
    key: "checkDesktopDeviceWindows",
    value: function checkDesktopDeviceWindows() {
      return !!this._userAgent.match(/Windows NT/i);
    }
    /**
     * Check Browser Default Language.
     *
     * @return {void}
     */

  }, {
    key: "checkLanguage",
    value: function checkLanguage() {
      try {
        var t = this;

        (function (a) {
          t._lang = a.substr(0, 2).toLowerCase();
          t._langCode = a.toLowerCase();
        })(this._w.navigator.userLanguage || this._w.navigator.language);
      } catch (e) {
        this._lang = 'en';
        this._langCode = 'en-us';

        this._w.console.log(e);
      }
    }
    /**
     * Check all Browser and save type in global variable
     *
     * @return {void}
     */

  }, {
    key: "checkAllBrowser",
    value: function checkAllBrowser() {
      if (this.isIE() || this.isEdge()) {
        this._browserName = 'IE';
      } else if (this.checkBrowserChrome()) {
        this._browserName = 'Chrome';
      } else if (this.checkBrowserFirefox()) {
        this._browserName = 'Firefox';
      } else if (this.checkBrowserOpera()) {
        this._browserName = 'Opera';
      } else if (this.checkBrowserSafari()) {
        this._browserName = 'Safari';
      }
    }
    /**
     * Check if is a Google Chrome browser
     *
     * @returns {boolean}
     */

  }, {
    key: "checkBrowserChrome",
    value: function checkBrowserChrome() {
      return !!this._userAgent.match(/Chrome/i);
    }
    /**
     * Check if is a Mozilla Firefox browser
     *
     * @returns {boolean}
     */

  }, {
    key: "checkBrowserFirefox",
    value: function checkBrowserFirefox() {
      return !!this._userAgent.match(/Firefox/i);
    }
    /**
     * Check if is an Opera browser
     *
     * @returns {boolean}
     */

  }, {
    key: "checkBrowserOpera",
    value: function checkBrowserOpera() {
      return !!this._userAgent.match(/Opera/i);
    }
    /**
     * Check if is an Apple Safari browser
     *
     * @returns {boolean}
     */

  }, {
    key: "checkBrowserSafari",
    value: function checkBrowserSafari() {
      return !!this._userAgent.match(/Safari/i);
    }
    /**
     * Detection from Internet Explorer and his version.
     *
     * @return {void}
     */

  }, {
    key: "checkBrowserInternetExplorer",
    value: function checkBrowserInternetExplorer() {
      var RegEx, HtmlTag;
      var t = this;
      /**
       * Find version number by regEx through the userAgent
       * Then set it to a variable and to the HTML Element Tag
       */

      function check(RegEx) {
        if (RegEx.exec(t._userAgent) !== null) {
          t._isIE = true; // Extract version number

          t._ieVersion = parseInt(RegExp.$1); // Get HTML tag element

          try {
            HtmlTag = this._w.document.getElementsByTagName('html')[0]; // Append html tag by an ie class

            /* istanbul ignore next */

            HtmlTag.className = HtmlTag.className || "";
            /* istanbul ignore next */

            HtmlTag.className += ' ie' + t._ieVersion;
          } catch (e) {}

          return true;
        }

        return false;
      }
      /**
       * Check Internet Explorer under equal Version 10
       */


      if (this._appName === 'Microsoft Internet Explorer') {
        // RegEx to find the IE version number
        RegEx = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        check(RegEx);
        /**
         * Check Internet Explorer OVER EQUAL Version 11
         */
      } else if (this._osType === 'Windows' || this._appName === 'Netscape') {
        // RegEx to find the IE version number
        RegEx = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
        check(RegEx); // Check if Browser is Edge

        RegEx = new RegExp("Edge/([0-9]{1,}[.0-9]{0,})");

        if (check(RegEx)) {
          t._isEdge = true;
        }
      }
    }
  }]);

  return BrowserDetection;
}();
