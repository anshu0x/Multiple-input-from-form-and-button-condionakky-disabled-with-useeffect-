import React from "react";

function Modal({ fname, lname, pass, showModal }) {
  return (
    <div>
      <div className="my-4 mx-3 alert alert-primary" role="alert">
        <button
          class="btn-close my-4 mx-4"
          aria-label="Close"
          onClick={() => showModal(false)}
        ></button>
        <span>First Name :</span> {fname}
        <span>Last Name :</span> {lname}
        <span>Password :</span> {pass}
      </div>
    </div>
  );
}

export default Modal;
