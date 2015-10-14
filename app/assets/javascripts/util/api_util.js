window.ApiUtil = {
  fetchAllRockets: function() {
    $.ajax ({
      url: 'api/rockets',
      success: function(rockets) {
        console.log(rockets);
        ApiActions.receiveAllRockets(rockets);
      },
      failure: function(err) {
        console.log(err);
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
