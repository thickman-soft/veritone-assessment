export const fetchAllItems = () => ({
  type: "@list/FETCH_ALL_ITEMS",
});

export const setItems = (items) => ({
  type: "@list/SET_ITEMS",
  payload: {
    items,
  },
});

export const addItem = (name, desc, num) => ({
  type: "@list/ADD_ITEM",
  payload: { name, desc, num },
});

export const insertItem = (id, name, desc, num) => ({
  type: "@list/INSERT_ITEM",
  payload: { id, name, desc, num },
});

export const removeItem = (id) => ({
  type: "@list/REMOVE_ITEM",
  payload: { id },
});

export const removeOneItem = (id) => ({
  type: "@list/REMOVE_ONE_ITEM",
  payload: { id },
});

export const crossItem = (id) => ({
  type: "@list/CROSS_ITEM",
  payload: { id },
});

export const crossOneItem = (id) => ({
  type: "@list/CROSS_ONE_ITEM",
  payload: { id },
});

export const updateItem = (id, item) => ({
  type: "@list/UPDATE_ITEM",
  payload: { id, item },
});

export const updateOneItem = (id, item) => ({
  type: "@list/UPDATE_ONE_ITEM",
  payload: { id, item },
});

export const setIsWaiting = (isWaiting) => ({
  type: "@list/SET_IS_WAITING",
  payload: { isWaiting },
});
