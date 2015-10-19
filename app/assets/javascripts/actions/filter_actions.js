window.FilterActions = {
  updateStart: function(start) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_START,
      start: start
    });
  },

  updateEnd: function(end) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_END,
      end: end
    });
  },

  updateTypes: function(types) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_TYPES,
      types: types
    });
  }

};
