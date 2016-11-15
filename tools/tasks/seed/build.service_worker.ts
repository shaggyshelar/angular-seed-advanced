import * as gulp from 'gulp';
import Config from '../../config';
export = () => {
    var path = require('path');
    var swPrecache = require('../../../node_modules/sw-precache/lib/sw-precache.js');
    var handleFetch = true;
    var rootDir = Config.PROD_DEST;
    var config = {
        cacheId: 'linkup',
        /*
        dynamicUrlToDependencies: {
          'dynamic/page1': [
            path.join(rootDir, 'views', 'layout.jade'),
            path.join(rootDir, 'views', 'page1.jade')
          ],
          'dynamic/page2': [
            path.join(rootDir, 'views', 'layout.jade'),
            path.join(rootDir, 'views', 'page2.jade')
          ]
        },
        */
        // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
        // the service worker will precache resources but won't actually serve them.
        // This allows you to test precaching behavior without worry about the cache preventing your
        // local changes from being picked up during the development cycle.
        handleFetch: handleFetch,
        //logger: $.util.log,
        runtimeCaching: [{
            // See https://github.com/GoogleChrome/sw-toolbox#methods
            urlPattern: /runtime-caching/,
            handler: 'cacheFirst',
            // See https://github.com/GoogleChrome/sw-toolbox#options
            options: {
                cache: {
                    maxEntries: 1,
                    name: 'runtime-cache'
                }
            }
        }],
        staticFileGlobs: [
            rootDir + '/**.html',
            rootDir + '/css/**.css',
            rootDir + '/assets/**/**.*',
            rootDir + '/font-awesome/**/**.*',
            rootDir + '/manifest.json',
            rootDir + '/js/**.js'
        ],
        stripPrefix: rootDir + '/',
        // verbose defaults to false, but for the purposes of this demo, log more.
        verbose: true
    };

    swPrecache.write(path.join(rootDir, 'service-worker.js'), config);


};
