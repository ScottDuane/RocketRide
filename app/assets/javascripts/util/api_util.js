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

  createRocket: function(rocketData) {
    $.ajax ({
      url: 'api/rockets',
      method: 'post',
      data: rocketData,
      success: function(rocket) {
        console.log("success");
        ApiActions.receiveRocket(rocket);
      },
      failure: function(err) {
        debugger;
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
