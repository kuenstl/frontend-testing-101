
const { SpecReporter } = require('jasmine-spec-reporter');
const browserstack = require('browserstack-local');

exports.config = {
  allScriptsTimeout: 11000,

  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  specs: ['./e2e/**/*.e2e-spec.ts'],

  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',

  capabilities: {
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  },

  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start(
        {
          'key': exports.config.capabilities['browserstack.key'],
        }, function (error) {
          if (error) return reject(error);
          console.log('Connected. Now testing...');

          resolve();
        });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve);
    });
  }
};
