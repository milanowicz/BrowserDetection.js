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
    expect(detection.getOsType()).toEqual('');
    expect(detection.getIeVersion()).toEqual(DEFAULT_IE_VERSION);
    expect(detection.getLanguage()).toEqual('en');
    expect(detection.getLanguageCode()).toEqual('en-us');
  }

  function checkDevice(value) {
    detection = new BrowserDetection(window, value.agent, value.appName);
    detection.checkAll();
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
});

