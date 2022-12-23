export const openAddModal = () => ({
  type: "@modal/OPEN_ADD_MODAL",
});

export const openDeleteModal = (id) => ({
  type: "@modal/OPEN_DELETE_MODAL",
  payload: {
    id,
  },
});

export const openEditModal = (item) => ({
  type: "@modal/OPEN_EDIT_MODAL",
  payload: {
    item,
  },
});

export const closeModal = () => ({
  type: "@modal/CLOSE_MODAL",
});
