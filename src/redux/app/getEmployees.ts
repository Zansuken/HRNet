import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../../types/employee";
import { AppAsyncThunkConfig } from "../store";
import mockedEmployees from "../../mocks/employees.mock.json";

const getEmployees: AsyncThunk<Employee[], void, AppAsyncThunkConfig> =
  createAsyncThunk(
    "users/getEmployees",
    async (_, { fulfillWithValue, rejectWithValue }) => {
      try {
        const fakeRequest = new Promise<Employee[]>((resolve) => {
          setTimeout(() => {
            resolve(mockedEmployees as Employee[]);
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
