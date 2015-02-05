module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha'],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './test/unit/index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/unit/index.js': 'browserify'
    },
    reporters: ['progress'],
    port: 9876,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
