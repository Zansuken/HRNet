import { RootState } from "../store";

export const appSelectors = {
  selectLoading: (state: RootState) => state.app.loading,
  selectError: (state: RootState) => state.app.error,
  selectSuccess: (state: RootState) => state.app.success,
  selectEmployees: (state: RootState) => state.app.employees,
};
