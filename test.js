var builder = require('systemjs-builder');

var err = function(e) {
  setTimeout(function() {
    throw e;
  });
}

console.log('Running the build...');
builder.build('test-plugin', {
  baseURL: '.'
}, 'test-plugin-build.js')
.then(function() {
  console.log('Done');
})
.catch(err);
