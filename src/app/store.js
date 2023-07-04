import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import ticketDetailReducer from "../redux/features/ticketDetailSlice";

export const store = configureStore({
  reducer: {
    app: ticketDetailReducer,
  },
});
