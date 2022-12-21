import { cloneDeep } from "lodash";

const INITIAL_STATE = {
  shoppingList: {},
  isWaiting: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@list/SET_IS_WAITING":
      return {
        ...state,
        isWaiting: action.payload.isWaiting,
      };
    case "@list/SET_ITEMS":
      return {
        ...state,
        shoppingList: action.payload.items.reduce((acc, cur) => {
          return {
            ...acc,
            [cur.id]: {
              ...cur,
              isPurchased: cur.is_purchased,
            },
          };
        }, {}),
      };
    case "@list/INSERT_ITEM":
      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          [action.payload.id]: {
            ...action.payload,
            isPurchased: false,
          },
        },
      };
    case "@list/REMOVE_ONE_ITEM":
      const newShoppingList = cloneDeep(state.shoppingList);
      delete newShoppingList[action.payload.id];
      return {
        ...state,
        shoppingList: newShoppingList,
      };
    case "@list/CROSS_ONE_ITEM":
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
    case "@list/UPDATE_ONE_ITEM":
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
  return state;
};

export default reducer;
