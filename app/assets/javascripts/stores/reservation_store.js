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
        var rocket = RocketStore.findById(reservation.rocket_id);
        if(rocket.captain_id === id) {
          owned.push(reservation);
        }
      });

      return owned;
    },

    updateReservation: function(updatedRes) {
      var updated = [];
      _reservations.forEach(function(reservation) {
        if(reservation === updatedRes) {
          updated.push(updatedRes);
        } else {
          updated.push(reservation);
        }
      });

      ReservationStore.resetReservations(updated);
    },

    deleteReservation: function(delRes) {
      var updated = [];
      _reservations.forEach(function(reservation) {
        if(reservation !== delRes) {
          updated.push(reservation);
        }
      });

      ReservationStore.resetReservations(updated);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case ReservationConstants.RESERVATION_RECEIVED:
          ReservationStore.resetReservations(payload.reservations);
          ReservationStore.emit(RESERVATION_INDEX_CHANGE);
          break;
        case ReservationConstants.RESERVATIONS_RECEIVED:
          ReservationStore.resetReservations(payload.reservations);
          ReservationStore.emit(RESERVATION_INDEX_CHANGE);
          break;
        case ReservationConstants.RESERVATION_UPDATED:
          ReservationStore.updateReservation(payload.reservation);
          ReservationStore.emit(RESERVATION_INDEX_CHANGE);
          break;
        case ReservationConstants.RESERVATION_DELETED:
          ReservationStore.deleteReservation(payload.reservation);
          ReservationStore.emit(RESERVATION_INDEX_CHANGE);
          break;

      }
    })
  });
}());
