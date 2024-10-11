import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../types/employee";
import { AppAsyncThunkConfig } from "../store";
import mockedEmployees from "../../mocks/employees.mock.json";
import { AppState } from "./appSlice";
import { IS_DEV } from "../../constants";

const getEmployees: AsyncThunk<Employee[], void, AppAsyncThunkConfig> =
  createAsyncThunk(
    "users/getEmployees",
    async (_, { fulfillWithValue, rejectWithValue, getState }) => {
      try {
        const state = getState() as { app: AppState };

        const returnedData =
          IS_DEV && state.app.employees.length === 0
            ? [...mockedEmployees, ...state.app.employees]
            : state.app.employees;

        const fakeRequest = new Promise<Employee[]>((resolve) => {
          setTimeout(() => {
            resolve(returnedData as Employee[]);
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
