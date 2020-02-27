const initialState = null;

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENTS_FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.events;
    }
    default: {
      return state;
    }
  }
}
module.exports = eventReducer;
