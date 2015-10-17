window.ApiUtil = {
  fetchAllRockets: function() {
    $.ajax ({
      url: 'api/rockets',
      success: function(rockets) {
        console.log("success");
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
        ApiActions.receiveRocket(rocket);
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
  },

  fetchAllUsers: function() {
    $.ajax ({
      url: 'api/users',
      success: function(users) {
        ApiActions.receiveAllUsers(users);
      }
    });
  },

  createReservation: function(resData) {
    $.ajax ({
      url: 'api/reservations',
      method: 'post',
      data: resData,
      success: function(reservation) {
        ApiActions.receiveReservation(reservation);
      },
      failure: function(err) {
        console.log(err);
      }
    });
  },

  approveReservation: function(reservation) {
    $.ajax ({
      url: 'api/reservations/' + reservation.id,
      method: 'patch',
      success: function(reservation) {
        ApiActions.updateReservation(reservation);
      }
    });
  }
};
