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

  createReservation: function() {
    $.ajax ({
      url: 'api/reservations',
      method: 'post',
      success: function(reservation) {
        ApiActions.receiveReservation(reservation);
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
