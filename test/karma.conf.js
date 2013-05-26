// Karma configuration
// Generated on Fri May 24 2013 00:48:00 GMT+0900 (JST)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  REQUIRE,
  REQUIRE_ADAPTER,
  'test/main.js',
  {pattern: 'test/vendor/mocker/mocker.js', included: false},
  {pattern: 'test/vendor/underscore/underscore.js', included: false},
  {pattern: 'test/node_modules/chai/chai.js', included: false},
  {pattern: 'test/specs/**/*Spec.js', included: false},
  {pattern: 'lib/**/*.js',  included: false}
];

preprocessors = {
  'lib/**/*.js': 'coverage'
};

// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_DISABLE;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS', 'ChromeCanary', 'Chrome'];

coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
