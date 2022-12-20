import { cloneDeep, last } from "lodash";

const INITIAL_STATE = {
  shoppingList: {},
  lastId: 0,
  isWaiting: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@list/ADD_ITEM":
      return {
        ...state,
        lastId: state.lastId + 1,
        shoppingList: {
          ...state.shoppingList,
          [lastId]: {
            id: lastId,
            ...action.payload,
          },
        },
      };
    case "@list/REMOVE_ITEM":
      const newShoppingList = cloneDeep(state.shoppingList);
      action.payload.ids.forEach((id) => delete newShoppingList[id]);
      return {
        ...state,
        shoppingList: newShoppingList,
      };
    case "@list/CROSS_ITEM":
      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          [action.payload.id]: {
            ...state.shoppingList[action.payload.id],
            isPurchased: !state.shoppingList[action.payload.id].isPurchased,
          },
        },
      };
    case "@list/UPDATE_ITEM":
      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          [action.payload.id]: {
            ...action.payload.item,
            id: action.payload.id,
          },
        },
      };
  }
};

export default reducer;
