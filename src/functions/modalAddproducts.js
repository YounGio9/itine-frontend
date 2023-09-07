import React, { useState } from 'react';

export function useModal(initialState = false) {
  const [showModal, setShowModal] = useState(initialState);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
// function for close and open modal
  const Modal = ({ children }) => {
    return showModal ? (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {children}
          <div className=" flex mt-10">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white py-2 w-1/2 mr-10 rounded hover:bg-gray-600"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-red-500 text-white  py-2 w-1/2  rounded hover:bg-red-600"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };

  return { openModal, closeModal, Modal };
}
