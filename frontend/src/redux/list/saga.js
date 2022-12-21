import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  fetchAllItems,
  addItem,
  deleteItem,
  toggleItem,
  editItem,
} from "../../api";

import { setItems, insertItem, removeOneItem } from "./action";

export function* fetchAllItemsSaga() {
  const response = yield call(fetchAllItems);
  yield put(setItems(response || []));
}

export function* addItemSaga({ payload }) {
  const response = yield call(addItem, payload.name, payload.desc, payload.num);
  if (response.success) {
    console.log("Hello")
    yield put(insertItem(response.id, payload.name, payload.desc, payload.num));
  }
}

export function* removeItemSaga({ payload }) {
  const response = yield call(deleteItem, payload.id);
  if (response.success) {
    yield put(removeOneItem(payload.id));
  }
}

export default all([
  takeLatest("@list/FETCH_ALL_ITEMS", fetchAllItemsSaga),
  takeLatest("@list/ADD_ITEM", addItemSaga),
  takeLatest("@list/REMOVE_ITEM", removeItemSaga),
]);
