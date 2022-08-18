// Use server-side JavaScript to create a programmable template
// You have full access to the guest context which can be accessed under guest, e.g. guest.email
// This file is being controlled by Source Control!
// This file will automatically get combined with your config.json and added to your tenant.

(function () {
  function getNumberOfEvents(session, eventType) {
    var numberOfEvents = 0;
    for (var i = 0; i < session.events.length; i++) {
      var event = session.events[i];
      if (event.type === eventType) {
        numberOfEvents++;
      }
    }
    return numberOfEvents;
  }

  var numberOfEvents = getNumberOfEvents(triggerSession, 'VIEW'); // triggerSession can be obtained using the getTriggerSession function
})();
