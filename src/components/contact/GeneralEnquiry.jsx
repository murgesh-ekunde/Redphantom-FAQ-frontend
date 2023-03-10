import { Container } from "@mui/system";
import React, { useState } from "react";
import { API } from "../../api";
import "./general.css";
import Axios from "axios";

function GeneralEnquiry() {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    let res = await Axios.post(`${API}/contact`, {
      name: name,
      email: email,
      message: message,
    });
    setStatus("Submit");
    if(res.status===200){
        alert("Submitted Successfully")
    }
  };

  return (
    <div className="enquiry__bg">
      <Container>
        <h4>Thank for your interest in redphantom</h4>
        <p>
          Please provide your most valuable information, so we can help you
          better!
        </p>
        <div className="enquiry__content">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={(e) => {setName(e.target.value)}}
              />
              <input
                type="email"
                id="email"
                placeholder="Email ID"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="right">
              <textarea
                placeholder="Query"
                id="message"
                rows="7"
                cols="40"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit"> {status}</button>
          </form>
        </div>
        <p> Your information is secured under our privacy policy </p>
      </Container>
    </div>
  );
}

export default GeneralEnquiry;
