(function (gdeName, gdeAttribute) {
  for (var i = 0; i < guest.dataExtensions.length; i++) {
    if (
      guest.dataExtensions[i].name === gdeName &&
      guest.dataExtensions[i].values &&
      guest.dataExtensions[i].values.gdeAttribute
    ) {
      return guest.dataExtensions[i].values.gdeAttribute;
    }
  }
  return false;
})();
