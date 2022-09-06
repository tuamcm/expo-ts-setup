import { all } from "redux-saga/effects";
import getRepo from "components/RepoComponent/repoSaga";
import getAuthTest from "components/AuthComponent/authSaga";

export default function* rootSaga() {
  yield all([getRepo(), getAuthTest()]);
}
