import React from "react";
import "./Modal.css";

const Modal = ({ imageSrc, altText, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <img src={imageSrc} alt={altText} className="modal-img" />
    </div>
  );
};

export default Modal;
