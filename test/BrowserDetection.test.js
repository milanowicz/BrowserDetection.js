import BrowserDetection from '../src/BrowserDetection';
import UserAgents from './UserAgents';

describe('BrowserDetection', () => {
  const DEFAULT_IE_VERSION = 100;
  let agent, detection, window;
  beforeEach(() => {
    if (typeof agent === 'undefined') {
      agent = '';
    }
    if (typeof window === 'undefined') {
      window = {};
    }
    detection = new BrowserDetection(window, agent);
  });

  const checkDefaults = (detection) => {
    expect(detection.isMobile()).toBeFalsy();
    expect(detection.isIE()).toBeFalsy();
    expect(detection.isEdge()).toBeFalsy();
    expect(detection.getBrowserName()).toEqual('');
    expect(detection.getAppName()).toEqual('');
    expect(detection.getOsType()).toEqual('');
    expect(detection.getIeVersion()).toEqual(DEFAULT_IE_VERSION);
    expect(detection.getLanguage()).toEqual('en');
    expect(detection.getLanguageCode()).toEqual('en-us');
    expect(detection.getUserAgent()).toBe('');
    checkUrlDefaults(detection);
  }

  const checkUrlDefaults = (detection) => {
    expect(detection.getUrlComplete()).toEqual('');
    expect(detection.getUrlHash()).toEqual('');
    expect(detection.getUrlHost()).toEqual('');
    expect(detection.getUrlHostname()).toEqual('');
    expect(detection.getUrlOrigin()).toEqual('');
    expect(detection.getUrlPathname()).toEqual('');
    expect(detection.getUrlPort()).toEqual('');
    expect(detection.getUrlProtocol()).toEqual('');
    expect(detection.getUrlSearch()).toEqual('');
  }

  function checkDevice(value) {
    detection = new BrowserDetection(window, value.agent, value.appName);
    detection.checkAll();
    expect(detection.getUserAgent()).toBe(value.agent);
    expect(detection.isMobile()).toEqual(value.mobile);
    expect(detection.getBrowserName()).toEqual(value.browser);
    expect(detection.getOsType()).toEqual(value.type);
    expect(detection.isIE()).toEqual(value.isIE);
    expect(detection.isEdge()).toEqual(value.isEdge);
    expect(detection.getIeVersion()).toEqual(value.ieVersion);
  }

  test('test constructor', () => {
    detection = new BrowserDetection();
    checkDefaults(detection);
  });

  test('test checkAll empty', () => {
    detection = new BrowserDetection();
    detection.checkAll();
    checkDefaults(detection);
  });

  test('test checkAll User Agents from Browser', () => {
    UserAgents.forEach((value) => {
      try {
        if (value.agents) {
          value.agents.forEach((agent) => {
            value.agent = agent;
            checkDevice(value);
          });
        } else {
          checkDevice(value);
        }
      } catch (e) {
        console.log(value);
        throw e;
      }
    });
  });

  test('test checkLanguage from Browser', () => {
    window = {};
    window.navigator = {};
    window.navigator.language = 'de-DE';
    detection = new BrowserDetection(window, agent);
    detection.checkLanguage();
    expect(detection.getLanguage()).toEqual('de');
    expect(detection.getLanguageCode()).toEqual('de-de');

    window.navigator.language = 'zh-CN';
    detection = new BrowserDetection(window, agent);
    detection.checkLanguage();
    expect(detection.getLanguage()).toEqual('zh');
    expect(detection.getLanguageCode()).toEqual('zh-cn');
  });

  test('test exception by checkLanguage from Browser', () => {
    window = {};
    window.navigator = {};
    window.navigator.language = 'de-DE';
    detection = new BrowserDetection(window, agent);
    detection.checkLanguage();
    expect(detection.getLanguage()).toEqual('de');
    expect(detection.getLanguageCode()).toEqual('de-de');

    window.console = {
      log: jest.fn()
    };
    window.navigator.language = {};
    detection = new BrowserDetection(window, agent);
    detection.checkLanguage();
    expect(detection.getLanguage()).toEqual('en');
    expect(detection.getLanguageCode()).toEqual('en-us');
    expect(window.console.log).toBeCalled()
  });

  test('test window location fallbacks when location is empty', () => {
    window = {};
    window.location = {};
    detection = new BrowserDetection(window, agent);
    checkUrlDefaults(detection);
  });

  test('test window location for Browser URL', () => {
    window = {};
    window.location = {
      href: 'http://127.0.0.1:8080/test/url/string.html?search=1#front=end',
      hostname: '127.0.0.1',
      pathname: '/test/url/string.html',
      hash: '#front=end',
      host: '127.0.0.1:8080',
      origin: 'http://127.0.0.1:8080',
      port: '8080',
      protocol: 'http:',
      search: '?search=1'
    };
    detection = new BrowserDetection(window, agent);
    expect(detection.getUrlComplete()).toEqual('http://127.0.0.1:8080/test/url/string.html?search=1#front=end');
    expect(detection.getUrlHostname()).toEqual('127.0.0.1');
    expect(detection.getUrlHash()).toEqual('#front=end');
    expect(detection.getUrlHost()).toEqual('127.0.0.1:8080');
    expect(detection.getUrlOrigin()).toEqual('http://127.0.0.1:8080');
    expect(detection.getUrlPathname()).toEqual('/test/url/string.html');
    expect(detection.getUrlProtocol()).toEqual('http:');
    expect(detection.getUrlPort()).toEqual('8080');
    expect(detection.getUrlSearch()).toEqual('?search=1');
  });

  test('Test logging for window variables', () => {
    console.log = jest.fn();
    detection.log();
    expect(console.log.mock.calls[0][0]).toBe('BrowserDetection.js | Mobile Device');
    expect(console.log.mock.calls[6][0]).toBe('BrowserDetection.js | Language Code');
    expect(console.log.mock.calls[7][0]).toBe('BrowserDetection.js | Complete');
    expect(console.log.mock.calls[15][0]).toBe('BrowserDetection.js | Protocol');
  });

  test('test logging for window variables', () => {
    console.log = jest.fn();
    detection.logWindow();
    expect(console.log.mock.calls[0][0]).toBe('BrowserDetection.js | Mobile Device');
    expect(console.log.mock.calls[0][1]).toBe(false);
    expect(console.log.mock.calls[1][0]).toBe('BrowserDetection.js | OS Type');
    expect(console.log.mock.calls[1][1]).toBe('');
    expect(console.log.mock.calls[2][0]).toBe('BrowserDetection.js | Browser');
    expect(console.log.mock.calls[1][1]).toBe('');
    expect(console.log.mock.calls[3][0]).toBe('BrowserDetection.js | MS IE');
    expect(console.log.mock.calls[1][1]).toBe('');
    expect(console.log.mock.calls[4][0]).toBe('BrowserDetection.js | MS Edge');
    expect(console.log.mock.calls[1][1]).toBe('');
    expect(console.log.mock.calls[5][0]).toBe('BrowserDetection.js | Language');
    expect(console.log.mock.calls[1][1]).toBe('');
    expect(console.log.mock.calls[6][0]).toBe('BrowserDetection.js | Language Code');
    expect(console.log.mock.calls[1][1]).toBe('');
  });

  test('test logging for URL variables', () => {
    console.log = jest.fn();
    detection.logUrl();
    expect(console.log.mock.calls[0][0]).toBe('BrowserDetection.js | Complete');
    expect(console.log.mock.calls[1][0]).toBe('BrowserDetection.js | Hash');
    expect(console.log.mock.calls[2][0]).toBe('BrowserDetection.js | Origin');
    expect(console.log.mock.calls[3][0]).toBe('BrowserDetection.js | Search');
    expect(console.log.mock.calls[4][0]).toBe('BrowserDetection.js | Host');
    expect(console.log.mock.calls[5][0]).toBe('BrowserDetection.js | Pathname');
    expect(console.log.mock.calls[6][0]).toBe('BrowserDetection.js | Hostname');
    expect(console.log.mock.calls[7][0]).toBe('BrowserDetection.js | Port');
    expect(console.log.mock.calls[8][0]).toBe('BrowserDetection.js | Protocol');
  });

  test('test HTML tag changes', () => {
    let data = {
      className: 'testing'
    };
    window = {
      document: {
        getElementsByTagName: jest.fn().mockImplementation(() => { return [data]; })
      }
    };
    detection = new BrowserDetection(
      window,
      'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)',
      'Microsoft Internet Explorer'
    );
    detection.checkAll();

    expect(window.document.getElementsByTagName).toBeCalled();
    expect(detection.getIeVersion()).toBe(9);
    expect(data.className).toBe('testing ie9');


    data = {};
    window = {
      document: {
        getElementsByTagName: jest.fn().mockImplementation(() => { return [data]; })
      }
    };
    detection = new BrowserDetection(
      window,
      'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)',
      'Microsoft Internet Explorer'
    );
    detection.checkAll();

    expect(window.document.getElementsByTagName).toBeCalled();
    expect(detection.getIeVersion()).toBe(9);
    expect(data.className).toBe(' ie9');
  })
});

