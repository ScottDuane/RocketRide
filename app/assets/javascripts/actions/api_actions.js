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
  }
};
