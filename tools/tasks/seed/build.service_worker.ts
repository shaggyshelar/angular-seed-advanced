import Config from '../../config';
export = () => {
    var path = require('path');
    var swPrecache = require('../../../node_modules/sw-precache/lib/sw-precache.js');
    var handleFetch = true;
    var rootDir = Config.PROD_DEST;
    var config = {
        maximumFileSizeToCacheInBytes : '4194304',
        cacheId: 'linkup',
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
            rootDir + '/assets/i18n/en.json',
            rootDir + '/assets/svg/logo-light.svg',
            rootDir + '/assets/logo.ico',
            rootDir + '/assets/images/**.*',
            rootDir + '/images/**/**.*',
            rootDir + '/fonts/**/**.*',
            rootDir + '/manifest.json',
            rootDir + '/service-worker.js',
            rootDir + '/js/*.js'
        ],
        stripPrefix: rootDir + '/',
    };

    swPrecache.write(path.join(rootDir, 'service-worker.js'), config);
};
