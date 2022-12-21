import { takeLatest, put, call, all } from "redux-saga/effects";

import {
  fetchAllItems,
  addItem,
  deleteItem,
  toggleItem,
  editItem,
} from "../../api";

import {
  setItems,
  insertItem,
  removeOneItem,
  crossOneItem,
  updateOneItem,
  setIsWaiting,
} from "./action";

export function* fetchAllItemsSaga() {
  yield put(setIsWaiting(true));
  const response = yield call(fetchAllItems);
  yield put(setIsWaiting(false));
  yield put(setItems(response || []));
}

export function* addItemSaga({ payload }) {
  yield put(setIsWaiting(true));
  const response = yield call(addItem, payload.name, payload.desc, payload.num);
  yield put(setIsWaiting(false));

  if (response.success) {
    yield put(insertItem(response.id, payload.name, payload.desc, payload.num));
  }
}

export function* removeItemSaga({ payload }) {
  yield put(setIsWaiting(true));
  const response = yield call(deleteItem, payload.id);
  yield put(setIsWaiting(false));

  if (response.success) {
    yield put(removeOneItem(payload.id));
  }
}

export function* crossItemSaga({ payload }) {
  yield put(setIsWaiting(true));
  const response = yield call(toggleItem, payload.id);
  yield put(setIsWaiting(false));

  if (response.success) {
    yield put(crossOneItem(payload.id));
  }
}

export function* updateItemSaga({ payload }) {
  yield put(setIsWaiting(true));
  const response = yield call(
    editItem,
    payload.item.id,
    payload.item.name,
    payload.item.desc,
    payload.item.num,
    payload.item.isPurchased
  );
  yield put(setIsWaiting(false));

  if (response.success) {
    yield put(updateOneItem(payload.id, payload.item));
  }
}

export default all([
  takeLatest("@list/FETCH_ALL_ITEMS", fetchAllItemsSaga),
  takeLatest("@list/ADD_ITEM", addItemSaga),
  takeLatest("@list/REMOVE_ITEM", removeItemSaga),
  takeLatest("@list/CROSS_ITEM", crossItemSaga),
  takeLatest("@list/UPDATE_ITEM", updateItemSaga),
]);
