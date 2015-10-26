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

    findAverage: function(rocket) {
      var ratings = RatingsStore.findByRocketId(rocket.id);
      var total = 0;
      ratings.forEach(function(rating) {
        total += rating.rating;
      });

      return total/ratings.length;
    },

    resetRatings: function(ratings) {
      _ratings = ratings;
    },

    addRating: function(rating) {
      _ratings.push(rating);
    },

    addIndexChangeListener: function(callback) {
      RatingsStore.on(RATINGS_CHANGE, callback);
    },

    removeIndexChangeListener: function(callback) {
      RatingsStore.removeListener(RATINGS_CHANGE, callback);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case RatingConstants.RATINGS_RECEIVED:
          RatingsStore.resetRatings(payload.ratings);
          RatingsStore.emit(RATINGS_CHANGE);
          break;
        case RatingConstants.RATING_RECEIVED:
          RatingsStore.addRating(payload.rating);
          RatingsStore.emit(RATINGS_CHANGE);
          break;
      }
    })
  });
}());
