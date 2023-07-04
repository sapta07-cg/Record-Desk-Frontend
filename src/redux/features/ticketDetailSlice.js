import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// create ticket

export const createTicket = createAsyncThunk(
  "create ticket",
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

//get ticket

export const getTicket = createAsyncThunk(
  "getTicket",
  async (args, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3002/tickets");

    try {
      const result = await response.json();
      console.log("Result from API is", result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

//delete ticket

export const deleteTicket = createAsyncThunk(
  "deleteTicket",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3002/tickets/${id}`, {
      method: "DELETE",
    });

    try {
      const result = await response.json();
      return result;
    } catch (err) {
      console.log("error for delete is ", err);
      return rejectWithValue(err);
    }
  }
);

export const ticketDetail = createSlice({
  name: "ticketDetail",
  initialState: {
    tickets: [],
    users: [],
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
    [getTicket.pending]: (state) => {
      state.loading = true;
    },
    [getTicket.fulfilled]: (state, action) => {
      state.loading = false;
      state.tickets = action.payload;
    },
    [getTicket.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteTicket.pending]: (state) => {
      state.loading = true;
    },
    [deleteTicket.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.tickets = state.tickets.filter((ele) => ele.id !== id);
      }
    },
    [deleteTicket.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default ticketDetail.reducer;
