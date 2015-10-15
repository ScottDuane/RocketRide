(function() {
  'use strict';

  var _users = [];
  window.UserStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _users.slice(0);
    },

    resetUsers: function(users) {
      _users = users;
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
