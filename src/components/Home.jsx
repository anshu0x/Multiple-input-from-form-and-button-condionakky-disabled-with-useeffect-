import React from "react";
import "./Home.css";
import doctor from "../assets/doctor.jpg";
import Navbar from "./Navbar";
import Stack from "@mui/material/Stack";
import CallIcon from "@mui/icons-material/Call";
import Button from "@mui/material/Button";
import Biography from "./Biography";
import Doctors from "./Doctors";
import Form from "./Form";
import Login from "./Login";
function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="home">
          <h1> We help people to get appointment in online</h1>

          <div className="btn_section">
            <div className="read_doc">
              <Stack spacing={2} direction="row">
                <Button
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                  type="button"
                  className="btn btn-primary"
                  variant="contained"
                >
                  <CallIcon /> Get an Appointment{" "}
                </Button>
              </Stack>
            </div>
          </div>
        </div>

        <div className="home2">
          <img src={doctor} alt="bnb" id="bnb" />
        </div>

        <Login />
      </div>

      <Biography />
      <Doctors />

      <Form />
    </>
  );
}

export default Home;
