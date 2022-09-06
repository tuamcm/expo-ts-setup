import { put, takeLeading } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthFulfilled, AuthPending, AuthRejected } from "./authSlice";
import { queryGetMessageById } from "./authQuery";

function* onTriggerAuthTest() {
  const getMessage = queryGetMessageById("14e40926ec8c0b1ee3a9", "DDD");
  console.log(getMessage);

  try {
    const { data } = yield axios.post(
      "http://localhost:4000/graphql",
      getMessage
    );
    console.log("===========DATA=========");
    console.log(data);

    yield put(AuthFulfilled(data));
  } catch (e: any) {
    console.log(e);

    yield put(AuthRejected(e.message));
  }
}

export default function* getAuthTest() {
  yield takeLeading(AuthPending.type, onTriggerAuthTest);
}
