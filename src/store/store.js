// vendor imports
import { configureStore } from "@reduxjs/toolkit";

// local imports
import apiReducer from "store/apiSlice";

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
