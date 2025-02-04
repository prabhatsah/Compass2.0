// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./slices/userSlice"

// export const store = configureStore({
//     reducer: {
//         user: userReducer
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Using localStorage by default
import { combineReducers } from "redux";
import userReducer from "./slices/userSlice"// Import user reducer

// Persist configuration
const persistConfig = {
  key: "root", // key for persisted data
  storage, // where the state will be saved
};

const rootReducer = combineReducers({
  user: userReducer, // add other reducers as needed
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
