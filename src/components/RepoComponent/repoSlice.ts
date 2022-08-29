import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ProcessStatus, ProcessError, RepoData, RepoState } from "./repoTypes";

const REPO_SLICE = "REPO_SLICE";

const initialState: RepoState = {
  loading: ProcessStatus.idle,
  error: null,
  data: [],
  searchText: "",
};

const RepoSlice = createSlice({
  name: REPO_SLICE,
  initialState,
  reducers: {
    RepoPending: (state, _: PayloadAction<string>) => {
      state.loading = ProcessStatus.pending;
    },
    RepoFulfilled: (state, action: PayloadAction<RepoData>) => {
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
export const { RepoPending, RepoFulfilled, RepoRejected, UpdateSearchText } = RepoSlice.actions;

// Selectors
export const stateRepo = (state: RootState) => state.repo;

// Reducer
export default RepoSlice.reducer;
