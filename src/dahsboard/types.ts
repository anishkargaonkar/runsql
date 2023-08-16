export type DashboardState = {
  searchQuery: string | null;
};

export enum DASHBOARD_ACTION_TYPES {
  SUBMIT_QUERY = "@@DASHBOARD/SUBMIT_QUERY",
  ADD_QUERY_HISTORY = "@@DASHBOARD/ADD_QUERY_HISTORY"
}
