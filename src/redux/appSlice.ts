import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Employee } from "../types/employee";

export interface AppState {
  employees: Employee[];
}

const initialState: AppState = {
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
});

export const { addEmployee } = appSlice.actions;

export default appSlice.reducer;
