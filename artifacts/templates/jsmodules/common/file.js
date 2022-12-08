(function () {
  function CheckForChannel(channel) {
    if (!guest && !guest.sessions) {
      return false;
    }

    guest.sessions.forEach((session) => {
      if (session.channel === channel) {
        return true;
      }
    });

    return false;
  }

  function CheckForGuestDataExtension(name) {
    if (!guest && !guest.dataExtensions) {
      return false;
    }

    guest.dataExtensions.forEach((dataExtension) => {
      if (dataExtension.name === name) {
        return true;
      }
    });

    return false;
  }

  function GetNumberOfEvents(session, eventType) {
    var numberOfEvents = 0;
    for (var i = 0; i < session.events.length; i++) {
      var event = session.events[i];
      if (event.type === eventType) {
        numberOfEvents++;
      }
    }
    return numberOfEvents;
  }
});
