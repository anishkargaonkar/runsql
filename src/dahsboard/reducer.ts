import { createReducer } from "@reduxjs/toolkit";
import { addQueryHistory, submitSearchQuery } from "./actions";
import { DashboardState } from "./types";

const initialState: DashboardState = {
  searchQuery: null
};

const reducer = createReducer(initialState, (builder) => {
  return builder
    .addCase(submitSearchQuery, (state, action) => {
      state.searchQuery = action.payload.query;
    })
    .addCase(addQueryHistory, (state, action) => {
      state.searchQuery = action.payload.query;
    });
});

export { initialState as dashboardInitialState, reducer as dashboardReducer };
