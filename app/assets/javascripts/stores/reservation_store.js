(function() {
  'use strict';
  var RESERVATION_INDEX_CHANGE = "reservation_index_change";
  var _reservations = [];

  window.ReservationStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _reservations.slice(0);
    },

    findByRocketId: function(id) {
      // debugger;
      var res = [];
      ReservationStore.all().forEach(function(reservation) {
<<<<<<< 6fe8eff56705b88c668995fee2b74c9229797537
=======

>>>>>>> Improvements to navbar
        if(reservation.rocket_id === id) {
          res.push(reservation);
        }
      });

      return res;
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

    ownedReservations: function(user_id, rocket_id) {
      var owned = [];
      ReservationStore.all().forEach(function(reservation) {
        var rocket = RocketStore.findById(reservation.rocket_id);
        if(rocket.captain_id === user_id && rocket.id === rocket_id) {
          owned.push(reservation);
        }
      });

      return owned;
    },

    createdReservations: function(id) {
      var created = [];
      ReservationStore.all().forEach(function(reservation) {
        if(reservation.creator_id === id) {
          created.push(reservation);
        }
      });

      return created;
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

    addReservation: function(reservation) {
      _reservations.push(reservation);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case ReservationConstants.RESERVATION_RECEIVED:
          ReservationStore.addReservation(payload.reservation);
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
