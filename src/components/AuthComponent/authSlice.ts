import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { AuthDataType, AuthInterface, authReducerName } from "./authTypes";
import { ProcessError, ProcessStatus } from "app/common/types";

const initialState: AuthInterface = {
  loading: ProcessStatus.idle,
  error: null,
  data: [],
  isLogged: true,
};

const AuthSlice = createSlice({
  name: authReducerName,
  initialState,
  reducers: {
    RepoPending: (state, _: PayloadAction<string>) => {
      state.loading = ProcessStatus.pending;
    },
    RepoFulfilled: (state, action: PayloadAction<AuthDataType>) => {
      state.loading = ProcessStatus.idle;
      state.data = action.payload;
    },
    RepoRejected: (state, action: PayloadAction<ProcessError>) => {
      state.loading = ProcessStatus.failed;
      state.error = action.payload;
    },
  },
});

// Actions
export const { RepoPending, RepoFulfilled, RepoRejected } = AuthSlice.actions;

// Selectors
export const authState = (state: RootState) => state.auth;

// Reducer
export default AuthSlice.reducer;
