import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createTicket = createAsyncThunk(
  "ticket details",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3002/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      console.log("result from form is", result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ticketDetail = createSlice({
  name: "ticketDetail",
  initialState: {
    tickets: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createTicket.pending]: (state) => {
      state.loading = true;
    },
    [createTicket.fulfilled]: (state, action) => {
      state.loading = false;
      state.tickets.push(action.payload);
    },
    [createTicket.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default ticketDetail.reducer;
