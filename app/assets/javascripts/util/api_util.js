window.ApiUtil = {
  fetchAllRockets: function() {
    $.ajax ({
      url: 'api/rockets',
      success: function(rockets) {
        ApiActions.receiveAllRockets(rockets);
      },
      failure: function(err) {
        console.log(err);
      }
    });
  },

  createRocket: function() {
    $.ajax ({
      url: 'api/rockets',
      method: 'post',
      success: function(rocket) {
        ApiActions.receiveRocket(rocket);
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
