(function() {
  'use strict';
  var ROCKETS_INDEX_CHANGE_EVENT = "rocket_index_change";

  var _rockets = [];

  window.RocketStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _rockets.slice(0);
    },

    resetRockets: function(rockets) {
      _rockets = rockets;
    },

    addIndexChangeListener: function(callback) {
      RocketStore.on(ROCKETS_INDEX_CHANGE_EVENT, callback);
    },

    removeIndexChangeListener: function(callback) {
      RocketStore.removeListener(ROCKETS_INDEX_CHANGE_EVENT, callback);
    },

    addRocket: function(rocket) {
      _rockets.push(rocket);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      // debugger;
      switch(payload.actionType) {
      case RocketConstants.ROCKETS_RECEIVED:
        RocketStore.resetRockets(payload.rockets);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;

      case RocketConstants.ROCKET_RECEIVED:
        RocketStore.addRocket(rocket);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;
      }
    })
  });

}());
