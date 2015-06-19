module.exports = {
  options: {
    configFile: 'protractor.e2e.conf.js',
    keepAlive: false, // If false, the grunt process stops when the test fails.
    noColor: false, // If true, protractor will not use colors in its output.
    args: {}
  },
  run: {},
  chrome: {
    options: {
      args: {
        browser: "chrome"
      }
    }
  }
};