(function() {
  'use strict';
  var RESERVATION_INDEX_CHANGE = "reservation_index_change";
  var _reservations = [];

  window.ReservationStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _reservations.slice(0);
    },

    resetReservations: function(reservations) {
      _reservations = reservations;
    },

    addIndexChangeListener: function(callback) {
      ReservationStore.on(RESERVATION_INDEX_CHANGE, callback);
    },

    removeIndexChangeListener: function(callback) {
      ReservationStore.removeListener(RESERVATION_INDEX_CHANGE, callback);
    },

    ownedReservations: function(id) {
      var owned = [];
      _reservations.forEach(function(reservation) {
        if(reservation.rocket.captain_id === id) {
          owned.push(reservation);
        }
      });

      return owned;
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case RESERVATION_INDEX_CHANGE:
          ReservationStore.resetReservations(payload.reservations);
          ReservationStore.emit(RESERVATION_INDEX_CHANGE);
          break;

      }
    })
  });
}());
