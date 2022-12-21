import { all } from "redux-saga/effects";

import list from "./list/saga";

export default function* rootSaga() {
  return yield all([list]);
}
