import React, { useEffect, useState } from "react";
import Modal from "./Modal";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    pass: "",
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;

    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [BtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (formData.fname && formData.lname && formData.pass) {
      setBtnDisabled(false);
    }
  }, [formData]);

  function SubmitForm(e) {
    e.preventDefault();

    if (BtnDisabled === false) {
      setshowModal(true);
    }
  }
  return (
    <div className="container">

	<h3>Form</h3>
     <form onSubmit={SubmitForm}>
  <div class="mb-3 my-5 mx-5 mx-4">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input name="fname" value={formData.fname} onChange={inputHandler}  type="text" class="form-control"  />
  </div>
  <div class="mb-3 mx-4 my-5 mx-5 ">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input name="lname" value={formData.lname} onChange={inputHandler}  type="fname" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <div class="mb-3 mx-4 my-5 mx-5 ">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input  name="pass" value={formData.pass} onChange={inputHandler} type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  
  <button disabled={BtnDisabled} type="submit" class="btn my-5 mx-5 mx-4 btn-primary">Submit</button>
</form>
      {showModal && (
        <Modal
          fname={formData.fname}
          lname={formData.lname}
          pass={formData.pass}
          showModal={setshowModal}
        />
      )}
    </div>
  );
}

export default App;
