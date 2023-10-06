// src/reducers.js

const initialState = {
    counters: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      // Add actions to manage counters here
      default:
        return state;
    }
  };
  
  export default rootReducer;
  