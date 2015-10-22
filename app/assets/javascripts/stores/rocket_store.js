(function() {
  'use strict';
  var ROCKETS_INDEX_CHANGE_EVENT = "rocket_index_change";

  var _rockets = [];
  var _filteredRockets = [];
  var filterSum = 0;
  window.RocketStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _rockets.slice(0);
    },

    filteredRockets: function() {
      return _filteredRockets.slice(0);
    },

    filterSum: function() {
      var sum = 0;
      _filters.forEach(function(count) {
        sum += count;
      });

      return sum;
    },

    filterReset: function() {
      filterSum = 0;
    },

    filterByStart: function(start) {
      var startingRockets;
      if(filterSum > 0) {
        startingRockets = RocketStore.filteredRockets();
      } else {
        startingRockets = RocketStore.all();
      }

      debugger;
      var newFiltered = [];
      startingRockets.forEach(function(rocket) {
        console.log(rocket);
        if(rocket.avail_start <= start) {

          newFiltered.push(rocket);
        }
      });
      filterSum++;
      _filteredRockets = newFiltered;
    },

    filterByEnd: function(end) {
      var startingRockets;
      if(filterSum > 0) {
        startingRockets = RocketStore.filteredRockets();
      } else {
        startingRockets = RocketStore.all();
      }

      var newFiltered = [];
      startingRockets.forEach(function(rocket) {
        if(rocket.avail_end >= end) {
          newFiltered.push(rocket);
        }
      });
      filterSum++;
      _filteredRockets = newFiltered;
    },

    filterByType: function(types) {
      var startingRockets;
      if(filterSum > 0) {
        startingRockets = RocketStore.filteredRockets();
      } else {
        startingRockets = RocketStore.all();
      }

      var newFiltered = [];
      startingRockets.forEach(function(rocket) {
        if(types.indexOf(rocket.rocket_type) > -1) {
          newFiltered.push(rocket);
        }
      });
      filterSum++;
      _filteredRockets = newFiltered;
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

    findById: function(id) {
      var myRocket;
      RocketStore.all().forEach(function(rocket){
        if(rocket.id === id) {
          myRocket = rocket;
        }
      });

      return myRocket;
    },

    ownedRockets: function(user_id) {
      var owned = [];
      RocketStore.all().forEach(function(rocket) {
        if(rocket.captain_id === user_id) {
          owned.push(rocket);
        }
      });

      return owned;
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      // debugger;
      switch(payload.actionType) {
      case RocketConstants.ROCKETS_RECEIVED:
        RocketStore.resetRockets(payload.rockets);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;

      case RocketConstants.ROCKET_RECEIVED:
        RocketStore.addRocket(payload.rocket);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;

      case FilterConstants.UPDATE_START:
        RocketStore.filterByStart(payload.start);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;

      case FilterConstants.UPDATE_END:
        RocketStore.filterByEnd(payload.end);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;

      case FilterConstants.UPDATE_TYPES:
        RocketStore.filterByType(payload.types);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
      }
    })
  });

}());
