/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: ['images/'],
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.

  return app.toTree();
};
