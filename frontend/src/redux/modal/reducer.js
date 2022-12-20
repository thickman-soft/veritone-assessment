const INITIAL_STATE = {
  isModalOpen: false,
  modalType: "", //"add", "edit", "delete",
  curItem: {
    id: -1,
    name: "",
    desc: "",
    count: 0,
    isPurchased: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "@modal/OPEN_ADD_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalType: "add",
      };
    case "@modal/OPEN_DELETE_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalType: "delete",
        curItem: {
          ...state.curItem,
          id: action.payload.id,
        },
      };
    case "@modal/OPEN_EDIT_MODAL":
      return {
        ...state,
        isModalOpen: true,
        modalType: "edit",
        curItem: action.payload.item,
      };
    case "@modal/CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
  }
  return state;
};

export default reducer;
