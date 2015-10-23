(function() {
  'use strict';
  var RATINGS_CHANGE = "RATINGS_CHANGE";
  var _ratings = [];

  window.RatingsStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _ratings.slice(0);
    },

    findByRocketId: function(rocket_id) {
      var rocket_ratings = [];

      RatingsStore.all().forEach(function(rating) {
        if(rating.rocket_id === rocket_id) {
          rocket_ratings.push(rating);
        }
      });
      return rocket_ratings;
    },

    resetRatings: function(ratings) {
      _ratings = ratings;
    },

    addIndexChangeListener: function(callback) {
      ReservationStore.on(RATINGS_CHANGE, callback);
    },

    removeIndexChangeListener: function(callback) {
      ReservationStore.removeListener(RATINGS_CHANGE, callback);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case RatingConstants.RATINGS_RECEIVED:
          RatingStore.resetRating(payload.ratings);
          RatingStore.emit(RATINGS_CHANGE);
          break;
        case RatingConstants.RATING_RECEIVED:
          RatingStore.addRating(payload.rating);
          RatingStore.emit(RATINGS_CHANGE);
          break;
      }
    })
  });
}());
