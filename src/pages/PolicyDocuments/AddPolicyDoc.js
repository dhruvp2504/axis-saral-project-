import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPolicyDoc = () => {
  const [title, setTitle] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8400/policydocument", {
        documentTitle: title,
        documentUrl: input2,
        documentType: input3,
      })
      .then(() => {
        alert("Policy Added!!");
        navigate("/policy-documents");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };
  return (
    <div className="form-container">
      <h1 className="form-heading">Policy Document</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          required
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="form-input"
          required
          type="text"
          placeholder="Document URL"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <label className="form-label">Upload Date:</label>
        <select
          name="policyDoc"
          id="policyDoc"
          className="selectDrop"
          onChange={(e) => setInput3(e.target.value)}
          style={{
            width: "250px",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid gray",
            fontSize: "16px",
            color: "gray",
            textAlign: "center",
          }}
        >
          <option value="Policy">POLICY</option>
          <option value="Sop">SOP</option>
          <option value="Scd">SCD</option>
        </select>

        <button className="form-button" type="submit">
          Add Policy
        </button>
      </form>
    </div>
  );
};

export default AddPolicyDoc;
