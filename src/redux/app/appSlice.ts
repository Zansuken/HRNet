import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../../types/employee";
import getEmployees from "./getEmployees";

export interface AppState {
  loading: boolean;
  error: string | null;
  success: boolean;
  employees: Employee[];
}

const initialState: AppState = {
  loading: false,
  error: null,
  success: false,
  employees: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(getEmployees.fulfilled, (state, { payload }) => {
      state.employees = payload;
      state.loading = false;
    });
    builder.addCase(getEmployees.rejected, (state, { payload }) => {
      state.error = payload as string;
      state.loading = false;
    });
  },
});

export const { addEmployee } = appSlice.actions;

export default appSlice.reducer;
