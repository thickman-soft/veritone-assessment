import { cloneDeep } from "lodash";

const INITIAL_STATE = {
  shoppingList: {},
  isWaiting: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { id } = action.payload;
  switch (action.type) {
    case "@list/SET_IS_WAITING":
      const { isWaiting } = action.payload;
      return {
        ...state,
        isWaiting: isWaiting,
      };
    case "@list/SET_ITEMS":
      const { items } = action.payload;
      return {
        ...state,
        shoppingList: items.reduce((acc, cur) => {
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
          [id]: {
            ...action.payload,
            isPurchased: false,
          },
        },
      };
    case "@list/REMOVE_ONE_ITEM":
      const newShoppingList = cloneDeep(state.shoppingList);
      delete newShoppingList[id];
      return {
        ...state,
        shoppingList: newShoppingList,
      };
    case "@list/CROSS_ONE_ITEM":
      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          [id]: {
            ...state.shoppingList[id],
            isPurchased: !state.shoppingList[id].isPurchased,
          },
        },
      };
    case "@list/UPDATE_ONE_ITEM":
      return {
        ...state,
        shoppingList: {
          ...state.shoppingList,
          [id]: {
            ...action.payload.item,
            id,
          },
        },
      };
  }
  return state;
};

export default reducer;
