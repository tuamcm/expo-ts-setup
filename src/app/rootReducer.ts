import { combineReducers } from "@reduxjs/toolkit";
import reducerRepo from "components/RepoComponent/repoSlice";
import reducerAuth from "components/AuthComponent/authSlice";

const rootReducer = combineReducers({
  repo: reducerRepo,
  auth: reducerAuth,
});

export default rootReducer;
