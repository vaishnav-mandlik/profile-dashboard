/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const Modal = ({ children, visible, onClose }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
    }
  }, [visible]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        showModal ? "opacity-100" : "opacity-0"
      } transition-opacity duration-200 ease-out`}
      onClick={handleClose}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div
        className={`bg-white rounded-lg w-full h-full md:h-auto md:w-1/2 xl:w-1/3 p-4 transform transition-all ${
          showModal ? "scale-100" : "scale-95"
        } duration-200 ease-out`}
        onClick={handleModalClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
