import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProject = () => {
  const token = localStorage.getItem("jwt");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:8100/project/update/` ,
        {
          projectTitle: input1,
          projectOwner: input2,
          teamMembersCount: input3,
          startingDate: input4,
          deadlineDate: "2023-04-25",
          projectStatus: "Ongoing",
          flowchartUrl: input5,
        },
        {
          headers: `${token}`,
        }
      )
      .then((response) => {
        alert("Project Updated!!");
        navigate("/projects");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  return (
    <div className="form-container" style={{"marginTop":"3rem"}}>
      <h1 className="form-heading">Projects</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          required
          type="text"
          placeholder="Title"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          className="form-input"
          required
          type="text"
          placeholder="Manager"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

        <input
          className="form-input"
          required
          type="text"
          placeholder="Openings"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
        />

        <input
          className="form-input"
          required
          type="text"
          placeholder="FlowChart"
          value={input5}
          onChange={(e) => setInput5(e.target.value)}
        />
        <label className="form-label">Project Start Date:</label>
        <input
          className="form-input form-date"
          required
          id="exampleDate"
          name="date"
          placeholder="date placeholder"
          type="date"
          onChange={(e) => setInput4(e.target.value)}
        />
        <button className="form-button" type="submit">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
