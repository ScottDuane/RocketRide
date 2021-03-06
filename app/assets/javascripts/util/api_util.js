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

  fetchAllReservations: function() {
    $.ajax ({
      url: 'api/reservations',
      success: function(reservations) {
        ApiActions.receiveAllReservations(reservations);
      }
    });
  },

  createReservation: function(resData) {
    $.ajax ({
      url: 'api/reservations',
      method: 'post',
      data: resData,
      success: function(reservation) {
        // debugger;
        ApiActions.receiveReservation(reservation);
      },
      failure: function(err) {
        console.log(err);
      }
    });
  },

  cancelReservation: function(reservation) {
    $.ajax ({
      url: 'api/reservations/'+reservation.id,
      method: 'patch',
      data: {status: 'cancelled'},
      success: function(updated_reservation) {
        console.log(updated_reservation);
        ApiActions.deleteReservation(updated_reservation);

      }
    });
  },

  denyReservation: function(reservation) {
    $.ajax ({
      url: 'api/reservations/' + reservation.id,
      method: 'patch',
      data: {status: 'denied'},
      success: function(updated_reservation) {
        ApiActions.updateReservation(updated_reservation);
      }
    });
  },

  approveReservation: function(reservation) {
    $.ajax ({
      url: 'api/reservations/' + reservation.id,
      method: 'patch',
      data: {status: 'approved'},
      success: function(updated_reservation) {
        ApiActions.updateReservation(updated_reservation);
      }
    });
  },

  createRating: function(rating) {
    // debugger;
    $.ajax ({
      url: 'api/ratings',
      method: 'post',
      data: rating,
      success: function(posted_rating) {
        ApiActions.addRating(posted_rating);
      },
      failure: function(err) {
        console.log(err);
      }
    });
  },

  fetchAllRatings: function() {
    $.ajax ({
      url: 'api/ratings',
      success: function(ratings) {
        ApiActions.receiveAllRatings(ratings);
      }
    });
  }
};
