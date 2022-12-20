export const addItem = (name, desc, num) => {
  return {
    type: "@list/ADD_ITEM",
    payload: { name, desc, num },
  };
};

export const removeItem = (ids) => {
  return {
    type: "@list/REMOVE_ITEM",
    payload: { ids },
  };
};

export const crossItem = (id) => {
  return {
    type: "@list/CROSS_ITEM",
    payload: { id },
  };
};

export const updateItem = (id, item) => {
  return {
    type: "@list/UPDATE_ITEM",
    payload: { id, item },
  };
};
