import { combineReducers } from "@reduxjs/toolkit";
import reducerRepo from "components/RepoComponent/repoSlice";

const rootReducer = combineReducers({
  repo: reducerRepo,
});

export default rootReducer;
