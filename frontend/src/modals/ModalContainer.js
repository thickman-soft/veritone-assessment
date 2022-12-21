import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AddItemModal from "./AddItemModal";
import EditItemModal from "./EditItemModal";
import DeleteItemModal from "./DeleteItemModal";

import { getModalType } from "../redux/selector";

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = () => {
  const modalType = useSelector(getModalType);
  return (
    <ModalWrapper>
      {modalType === "add" && <AddItemModal />}
      {modalType === "edit" && <EditItemModal />}
      {modalType === "delete" && <DeleteItemModal />}
    </ModalWrapper>
  );
};

export default ModalContainer;
