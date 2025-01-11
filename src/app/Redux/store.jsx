// src/Redux/store.js

import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import rootReducer from './reducers'; // Import your root reducer

// Create the store using configureStore
const store = configureStore({
  reducer: rootReducer, // Set your root reducer
  // Additional middleware or options can be added here if needed
});

// Export the store
export default store;
