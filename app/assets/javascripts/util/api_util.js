window.ApiUtil = {
  fetchAllRockets: function() {
    $.ajax ({
      url: 'api/rockets',
      success: function(rockets) {
        ApiActions.receiveAllRockets(rockets);
      }
    });
  },

  logOut: function() {
    $.ajax ({
      url: '/session/',
      method: 'delete',
      success: function(data) {
        window.location='/session/new';
      }
    });
  }
};
