(function() {
  'use strict';
  var ROCKETS_INDEX_CHANGE_EVENT = "rocket_index_change";

  var _rockets = [];
  var _filteredRockets = [];
  var typeFilter = ["Constitution class starship", "Galaxy class starship", "Shuttlecraft", "Freightor"];
  var capFilter = 0;
  var endFilter = new Date("December 31, 5000");
  var startFilter = new Date("January 1, 1000");
  var initFilter = false;

  window.RocketStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      // debugger;
      return _rockets.slice(0);
    },

    filteredRockets: function() {
      // debugger;
      if(initFilter) {
        return _filteredRockets.slice(0);
      } else {
        return _rockets.slice(0);
      }
    },

    filterByStart: function(start) {
      startFilter = start;
      RocketStore.filterRockets();
    },

    filterByEnd: function(end) {
      endFilter = end;
      RocketStore.filterRockets();
    },

    filterByType: function(types) {
      typeFilter = types;
      RocketStore.filterRockets();
    },

    filterByCapacity: function(capacity) {
      capFilter = capacity;
      RocketStore.filterRockets();
    },

    filterRockets: function() {
      var myFilteredRockets = [];
      RocketStore.all().forEach(function(rocket) {
        debugger;
        if((Date.parse(rocket.avail_start) >= Date.parse(startFilter) && Date.parse(rocket.avail_end) <= Date.parse(endFilter)) && (typeFilter.indexOf(rocket.rocket_type) > -1 && rocket.capacity >= capFilter) ) {
          myFilteredRockets.push(rocket);
        }
      });
      initFilter = true;
      _filteredRockets = myFilteredRockets;
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
        break;

      case FilterConstants.UPDATE_CAPACITY:
        RocketStore.filterByCapacity(payload.capacity);
        RocketStore.emit(ROCKETS_INDEX_CHANGE_EVENT);
        break;
      }
    })
  });

}());
