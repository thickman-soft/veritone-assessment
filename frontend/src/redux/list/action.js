export const fetchAllItems = () => {
  return {
    type: "@list/FETCH_ALL_ITEMS",
  };
};

export const setItems = (items) => {
  return {
    type: "@list/SET_ITEMS",
    payload: {
      items,
    },
  };
};

export const addItem = (name, desc, num) => {
  return {
    type: "@list/ADD_ITEM",
    payload: { name, desc, num },
  };
};

export const insertItem = (id, name, desc, num) => {
  return {
    type: "@list/INSERT_ITEM",
    payload: { id, name, desc, num },
  };
};

export const removeItem = (id) => {
  return {
    type: "@list/REMOVE_ITEM",
    payload: { id },
  };
};

export const removeOneItem = (id) => {
  return {
    type: "@list/REMOVE_ONE_ITEM",
    payload: { id },
  };
};

export const crossItem = (id) => {
  return {
    type: "@list/CROSS_ITEM",
    payload: { id },
  };
};

export const crossOneItem = (id) => {
  return {
    type: "@list/CROSS_ONE_ITEM",
    payload: { id },
  };
};

export const updateItem = (id, item) => {
  return {
    type: "@list/UPDATE_ITEM",
    payload: { id, item },
  };
};

export const updateOneItem = (id, item) => {
  return {
    type: "@list/UPDATE_ONE_ITEM",
    payload: { id, item },
  };
};
