import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../types/employee";
import { AppAsyncThunkConfig } from "../store";
// import mockedEmployees from "../../mocks/employees.mock.json"; // Uncomment this line if you want to use mocked data
import { AppState } from "./appSlice";

const getEmployees: AsyncThunk<Employee[], void, AppAsyncThunkConfig> =
  createAsyncThunk(
    "users/getEmployees",
    async (_, { fulfillWithValue, rejectWithValue, getState }) => {
      try {
        const state = getState() as { app: AppState };

        const fakeRequest = new Promise<Employee[]>((resolve) => {
          setTimeout(() => {
            resolve(state.app.employees as Employee[]);
          }, 1000);
        });
        const response = await fakeRequest;

        return fulfillWithValue(response);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

export default getEmployees;
