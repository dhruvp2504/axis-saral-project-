import axios from "axios";
import React, { useState } from "react";
import "./Notification.css";
const Notification = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8500/sendMail",
        {
          recipient: "dhruv2504@gmail.com",
          msgBody: input2,
          subject: input1,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then(alert("Notification Sent Successfully!"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Notification</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Title"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <textarea
          className="form-input-about"
          type="text"
          placeholder="Message"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button className="form-button" type="submit">
          Send Notification
        </button>
      </form>
    </div>
  );
};

export default Notification;
