import { all } from "redux-saga/effects";
import getRepo from "components/RepoComponent/repoSaga";

export default function* rootSaga() {
  yield all([getRepo()]);
}
