(function() {
  'use strict';
  var ROCKETS_INDEX_CHANGE_EVENT = "rocket_index_change";

  var _rockets = [];

  window.RocketStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _rockets.slice(0);
    },

    addIndexChangeListener: function(callback) {
      RocketStore.on(ROCKETS_INDEX_CHANGE_EVENT, callback);
    },

    removeIndexChangeListener: function(callback) {
      RocketStore.removeListener(ROCKETS_INDEX_CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
      case RocketConstants.ROCKETS_RECEIVED:
        resetRockets(payload.rockets);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;
      }
    })
  });

}());
