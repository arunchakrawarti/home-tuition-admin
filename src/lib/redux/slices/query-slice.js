import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_API_BASE_URL = process.env.BACKEND_API_BASE_URL;

// Fetch Queries
export const fetchQueries = createAsyncThunk(
  "query/fetchQueries",
  async ({ token,filters={} }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${BACKEND_API_BASE_URL}/api/admin/query`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: filters,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch queries."
      );
    }
  }
);

const initialState = {
  queryList: [],
  documentCount: 0,
  dataLoading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQueries.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchQueries.fulfilled, (state, action) => {
        state.dataLoading = false;

        state.queryList =
          action.payload?.data ||
          action.payload?.queries ||
          [];

        state.documentCount =
          action.payload?.count ||
          action.payload?.documentCount ||
          state.queryList.length;
      })
      .addCase(fetchQueries.rejected, (state, action) => {
        state.dataLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetError } = querySlice.actions;

export default querySlice.reducer;