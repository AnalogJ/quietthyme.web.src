self.addEventListener('push', function(event) {

  let notificationData = {};

  try {
    notificationData = event.data.json();
  } catch (e) {
    notificationData = {
      title: 'Default title',
      body: 'Default message',
      icon: '/default-icon.png'
    };
  }
  notificationData.tag = notificationData.tag || 'book';
  notificationData.data = Object.assign({
    newMessageCount: 1,
    dateOfArrival: Date.now()
  }, notificationData.data || {});



  //
  // event.waitUntil(
  //   self.registration.showNotification(notificationData.title, {
  //     body: notificationData.body,
  //     icon: notificationData.icon
  //   })
  // );


  const promiseChain = self.registration.getNotifications()
      .then(function(notifications){
        var currentNotification;

        for(var i = 0; i < notifications.length; i++) {
          if (notifications[i].tag &&
            notifications[i].tag === 'book') {
            currentNotification = notifications[i];
          }
        }

        return currentNotification;
      })
      .then(function(currentNotification){
        if (currentNotification) {
          // We have an open notification, let's do something with it.
          const messageCount = currentNotification.data.newMessageCount + 1;

          notificationData.body = `You have added ${messageCount} new books.`;
          notificationData.data.newMessageCount = messageCount;
          notificationData.title = `A book was added to QuietThyme`;

          // Remember to close the old notification.
          currentNotification.close();
        } else {

        }

        var notificationTitle = notificationData.title;
        delete notificationData.title

        if(notificationData.data.test){
          notificationTitle = '[Test]' + notificationTitle
        }

        return registration.showNotification(
          notificationTitle,
          notificationData
        );
    });


});

self.addEventListener('notificationclose', function(e) {
  var notification = e.notification;

  console.log('Closed notification');
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    // clients.openWindow('http://www.example.com');
    console.log("DO SOMETHING ON NOTIFICATION CLICK")
    notification.close();
  }
});