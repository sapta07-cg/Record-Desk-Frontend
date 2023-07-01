import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counter/counterSlice";
import { ticketDetail } from "../redux/features/ticketDetailSlice";

export const store = configureStore({
  reducer: {
    app: ticketDetail,
  },
});
