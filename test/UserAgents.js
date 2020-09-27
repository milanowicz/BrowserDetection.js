const DEFAULT_IE_VERSION = 100;
const UserAgents = [
  {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1',
    type: 'Apple',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/603.1.23 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1',
    type: 'Apple',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.84 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 7.0; SM-G930VC Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/58.0.3029.83 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G935S Build/MMB29K; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 7.1.1; G8231 Build/41.2.A.0.219; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 6.0.1; E6653 Build/32.2.A.0.253) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    type: 'Apple',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (Apple-iPhone7C2/1202.466; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3',
    type: 'Apple',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 7.0; Pixel C Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/52.0.2743.98 Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 7.0; SM-T827R4 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.116 Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 5.0.2; SAMSUNG SM-T550 Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/3.3 Chrome/38.0.2125.102 Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/47.1.79 like Chrome/47.0.2526.80 Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Linux; Android 5.0.2; LG-V410/V41020c Build/LRX22G) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/34.0.1847.118 Safari/537.36',
    type: 'Android',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9320; en-GB) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.398 Mobile Safari/534.11+',
    type: 'Black Berry',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9300; en-GB) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.546 Mobile Safari/534.8+',
    type: 'Black Berry',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9800; en-GB) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.546 Mobile Safari/534.8+',
    type: 'Black Berry',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: '',
    agent: 'BlackBerry8520/5.0.0.681 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/600',
    type: 'Black Berry',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Opera',
    agent: 'Opera/12.02 (Android 4.1; Linux; Opera Mobi/ADR-1111101157; U; en-US) Presto/2.9.201 Version/12.02',
    type: 'Opera',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Opera',
    agent: 'Opera/9.80 (Android 2.3.3; Linux; Opera Mobi/ADR-1111101157; U; es-ES) Presto/2.9.201 Version/11.50',
    type: 'Opera',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Opera',
    agent: 'Opera/9.80 (Android 2.2.1; Linux; Opera Mobi/ADR-1107051709; U; pl) Presto/2.8.149 Version/11.10',
    type: 'Opera',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: true,
    browser: 'Opera',
    agent: 'Opera/9.80 (S60; SymbOS; Opera Mobi/SYB-1107071606; U; en) Presto/2.8.149 Version/11.10',
    type: 'Opera',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Safari',
    agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/600.7.12 (KHTML, like Gecko) Version/8.0.7 Safari/600.7.12',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Chrome',
    agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Firefox',
    agent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Firefox',
    agent: 'Mozilla/5.0 (X11; Linux ppc64le; rv:75.0) Gecko/20100101 Firefox/75.0',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Firefox',
    agent: 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.10; rv:75.0) Gecko/20100101 Firefox/75.0',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Opera',
    agent: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16.2',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Opera',
    agent: 'Opera/9.80 (X11; Linux i686; Ubuntu/14.10) Presto/2.12.388 Version/12.16',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: '',
    mobile: false,
    browser: 'Opera',
    agent: 'Opera/9.80 (Macintosh; Intel Mac OS X 10.14.1) Presto/2.12.388 Version/12.16',
    type: '',
    isIE: false,
    isEdge: false,
    ieVersion: DEFAULT_IE_VERSION
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 8
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0;)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 7
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 8
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.0)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 9
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 9
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 10
  }, {
    appName: 'Microsoft Internet Explorer',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 10
  }, {
    appName: 'Netscape',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 11
  }, {
    appName: 'Netscape',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows NT 6.2; Trident/7.0; rv:11.0) like Gecko',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 11
  }, {
    appName: 'Netscape',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 11
  }, {
    appName: 'Netscape',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows NT 10.0; Trident/7.0; rv:11.0) like Gecko',
    type: '',
    isIE: true,
    isEdge: false,
    ieVersion: 11
  }, {
    appName: 'Netscape',
    mobile: false,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    type: '',
    isIE: true,
    isEdge: true,
    ieVersion: 12
  }, {
    appName: '',
    mobile: true,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537',
    type: 'Windows',
    isIE: true,
    isEdge: false,
    ieVersion: 11
  }, {
    appName: '',
    mobile: true,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; RM-1152) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.15254',
    type: 'Windows',
    isIE: true,
    isEdge: true,
    ieVersion: 15
  }, {
    appName: '',
    mobile: true,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; RM-1127_16056) AppleWebKit/537.36(KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.10536',
    type: 'Windows',
    isIE: true,
    isEdge: true,
    ieVersion: 12
  }, {
    appName: '',
    mobile: true,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.1058',
    type: 'Windows',
    isIE: true,
    isEdge: true,
    ieVersion: 13
  }, {
    appName: '',
    mobile: true,
    browser: 'IE',
    agent: 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Mobile Safari/537.36 Edge/15.14977',
    type: 'Windows',
    isIE: true,
    isEdge: true,
    ieVersion: 15
  }
];

export default UserAgents;
