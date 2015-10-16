(function() {
  'use strict';
  var USERS_CHANGE_EVENT = "USERS_CHANGE_EVENT";
  var _users = [];
  window.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _users.slice(0);
    },

    resetUsers: function(users) {
      _users = users;
    },

    findById: function(id) {
      var this_user = null;
      _users.forEach(function(user) {
        if (user.id === id) {
          this_user = user;
        }
      });

      return this_user;
    },

    addUserChangeListener: function(callback) {
      UserStore.on(USERS_CHANGE_EVENT, callback);
    },

    removeUserChangeListener: function(callback) {
      UserStore.removeListener(callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
      case UserConstants.USERS_RECEIVED:
        UserStore.resetUsers(payload.users);
        UserStore.emit(USERS_CHANGE_EVENT);
        break;
    }
    })
  });
}());
