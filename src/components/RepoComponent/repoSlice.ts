import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProcessError, ProcessStatus } from "app/common/types";
import { RootState } from "../../app/store";
import { RepoDataType, RepoInterface, repoReducerName } from "./repoTypes";

const initialState: RepoInterface = {
  loading: ProcessStatus.idle,
  error: null,
  data: [],
  searchText: "",
};

const RepoSlice = createSlice({
  name: repoReducerName,
  initialState,
  reducers: {
    RepoPending: (state, _: PayloadAction<string>) => {
      state.loading = ProcessStatus.pending;
    },
    RepoFulfilled: (state, action: PayloadAction<RepoDataType>) => {
      state.loading = ProcessStatus.idle;
      state.data = action.payload;
    },
    RepoRejected: (state, action: PayloadAction<ProcessError>) => {
      state.loading = ProcessStatus.failed;
      state.error = action.payload;
    },
    UpdateSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

// Actions
export const { RepoPending, RepoFulfilled, RepoRejected, UpdateSearchText } =
  RepoSlice.actions;

// Selectors
export const repoState = (state: RootState) => state.repo;

// Reducer
export default RepoSlice.reducer;
