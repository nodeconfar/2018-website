const swPrecache = require('sw-precache');
const path = require('path');

const rootDir = '.'
const config = {
  cacheId: 'nodeconf2018',
  handleFetch: true,
  runtimeCaching: [{
    urlPattern: /runtime-caching/,
    handler: 'cacheFirst',
    options: {
      cache: {
        maxEntries: 1,
        name: 'runtime-cache'
      }
    }
  }],
  staticFileGlobs: [
    rootDir + '/css/**.css',
    rootDir + '/**.html',
    rootDir + '/assets/**/**.*',
    rootDir + '/js/**.js'
  ],
  stripPrefix: rootDir + '/',
  verbose: true
};

swPrecache.write(path.join(rootDir, 'service-worker.js'), config, ()=> {console.log('done')});
