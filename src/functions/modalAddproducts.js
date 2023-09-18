import React, { useState } from "react";

export function useModal(initialState = false) {
  const [showModal, setShowModal] = useState(initialState);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    console.log("click on close ");
    setShowModal(false);
  };

  // function for close and open modal
  const Modal = ({ children }) => {
    return showModal ? (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-md">{children}</div>
      </div>
    ) : null;
  };

  return { openModal, closeModal, Modal };
}
