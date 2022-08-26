import { put, takeLeading } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RepoFulfilled, RepoPending, RepoRejected } from "./repoSlice";

function* onTriggerRepo(action: PayloadAction<string>) {
  try {
    const { data } = yield axios.get("https://registry.npmjs.org/-/v1/search", {
      params: {
        text: action.payload,
      },
    });
    const names: string[] = data.objects.map((result: any) => {
      return result.package.name;
    });
    yield put(RepoFulfilled(names));
  } catch (e: any) {
    yield put(RepoRejected(e.message));
  }
}

export default function* getRepo() {
  yield takeLeading(RepoPending.type, onTriggerRepo);
}
