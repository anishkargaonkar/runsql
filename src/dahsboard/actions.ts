import { createAction } from "@reduxjs/toolkit";
import { DASHBOARD_ACTION_TYPES } from "./types";

export const submitSearchQuery = createAction<{ query: string }>(
  DASHBOARD_ACTION_TYPES.SUBMIT_QUERY
);
export const addQueryHistory = createAction<{ query: string }>(
  DASHBOARD_ACTION_TYPES.ADD_QUERY_HISTORY
);
