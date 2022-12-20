export const openAddModal = () => {
  return {
    type: "@modal/OPEN_ADD_MODAL",
  };
};

export const openDeleteModal = () => {
  return {
    type: "@modal/OPEN_DELETE_MODAL",
  };
};

export const openEditModal = (item) => {
  return {
    type: "@modal/OPEN_EDIT_MODAL",
    payload: {
      item,
    },
  };
};

export const closeModal = () => {
  return {
    type: "@modal/CLOSE_MODAL",
  };
};
