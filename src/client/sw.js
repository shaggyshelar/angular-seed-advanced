
importScripts('node_modules/sw-toolbox/sw-toolbox.js');

//toolbox.options.debug = true;

toolbox.precache(['/']);

toolbox.router.get('/',toolbox.fastest);

self.addEventListener('install', function (event) {
    self.skipWaiting();
    console.log('Installed Service Worker', event);
});

self.addEventListener('activate', function (event) {
    console.log('Activated Service Worker', event);
});

self.addEventListener('push', function (event) {
    console.log('Push message', event);
    var title = 'Notification.';
    var body = 'Click to see new notification.';
    var icon = 'assets/images/jarvis192.png';
    var notificationTag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body, icon: icon, tag: notificationTag
        })
    );

    // event.waitUntil(
    //     fetch("SOME_API_ENDPOINT").then(function (response) {
    //         if (response.status !== 200) {
    //             return self.registration.showNotification(title, {
    //                 body: 'Looks like there was a problem. Status Code: ' + response.status,
    //                 icon: icon,
    //                 tag: notificationTag
    //             });
    //         }

    //         return response.json().then(function (data) {
    //             if (data.error || !data.notification) {
    //                 return self.registration.showNotification(title, {
    //                     body: 'The API returned an error.' + data.error,
    //                     icon: icon,
    //                     tag: notificationTag
    //                 });
    //             }

    //             /* var title = data.notification.title;
    //             var body = data.notification.message;
    //             var icon = data.notification.icon;
    //             var notificationTag = data.notification.tag; */

    //             return self.registration.showNotification(title, {
    //                 body: body,
    //                 icon: icon,
    //                 tag: notificationTag
    //             });
    //         });
    //     }).catch(function (err) {
    //         title = 'An error occurred';
    //         body = 'We were unable to get the information for this push message';
    //         notificationTag = 'notification-error';
    //         return self.registration.showNotification(title, {
    //             body: body,
    //             icon: icon,
    //             tag: notificationTag
    //         });
    //     })
    // );
});

self.addEventListener('notificationclick', function (event) {
    console.log('Notification click: tag', event.notification.tag);
    // Android doesn't close the notification when you click it
    // See http://crbug.com/463146
    event.notification.close();
    var url = 'https://sh-sagarshelar.rhcloud.com';
    // Check if there's already a tab open with this URL.
    // If yes: focus on the tab.
    // If no: open a tab with the URL.
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
            .then(function (windowClients) {
                console.log('WindowClients', windowClients);
                for (var i = 0; i < windowClients.length; i++) {
                    var client = windowClients[i];
                    console.log('WindowClient', client);
                    if (client.url === url && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(url);
                }
            })
    );
});