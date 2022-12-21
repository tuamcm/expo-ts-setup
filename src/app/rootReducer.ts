import { combineReducers } from "@reduxjs/toolkit";
import reducerRepo from "components/RepoComponent/repoSlice";
import reducerAuth from "components/AuthComponent/authSlice";
import reducerHome from "screens/HomeScreen/HomeSlice";

const rootReducer = combineReducers({
  repo: reducerRepo,
  auth: reducerAuth,
  home: reducerHome,
});

export default rootReducer;
