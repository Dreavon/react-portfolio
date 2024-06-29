import React from "react";
import "./Expmodal.css";

const ExpModal = ({ imageSrc, altText, closeModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <img src={imageSrc} alt={altText} className="modal-img" />
    </div>
  );
};

export default ExpModal;
