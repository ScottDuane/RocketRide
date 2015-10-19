window.ApiActions = {
  receiveAllRockets: function(rockets) {
    AppDispatcher.dispatch({
      actionType: RocketConstants.ROCKETS_RECEIVED,
      rockets: rockets
    });
  },

  receiveRocket: function(rocket) {
    // debugger;
    AppDispatcher.dispatch ({
      actionType: RocketConstants.ROCKET_RECEIVED,
      rocket: rocket
    });
  },

  receiveAllUsers: function(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveAllReservations: function(reservations) {
    AppDispatcher.dispatch({
      actionType: ReservationConstants.RESERVATIONS_RECEIVED,
      reservations: reservations
    });
  },

  receiveReservation: function(reservation) {
    AppDispatcher.dispatch({
      actionType: ReservationConstants.RESERVATION_RECEIVED,
      reservation: reservation
    });
  },

  updateReservation: function(reservation) {
    AppDispatcher.dispatch({
      actionType: ReservationConstants.RESERVATION_UPDATED,
      reservation: reservation
    });
  },

  deleteReservation: function(reservation) {
    AppDispatcher.dispatch({
      actionType: ReservationConstants.RESERVATION_DELETED,
      reservation: reservation
    });
  }
};
