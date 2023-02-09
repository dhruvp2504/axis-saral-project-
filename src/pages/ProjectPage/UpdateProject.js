import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isAdmin } from "../../utils/CheckLogin";

const UpdateProject = () => {
  const token = localStorage.getItem("jwt");
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const projectId = localStorage.getItem("projUpdateId");

  useEffect(() => {
    axios
      .get(`http://localhost:8100/project/${projectId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setProject(res.data);
      });
  }, []);

  const requestBody = {
    projectTitle: project.projectTitle,
    projectOwner: project.projectOwner,
    teamMembersCount: project.teamMembersCount,
    startingDate: project.startingDate,
    deadlineDate: "2023-04-25",
    projectStatus: "Ongoing",
    flowchartUrl: input5,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isAdmin
      ? axios
          .put(
            `http://localhost:8100/project/update/${projectId}`,
            {
              projectId: projectId,
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
            localStorage.removeItem("projUpdateId");
          })
          .catch((err) => {
            console.log("Err", err);
          })
      : axios
          .put(
            `http://localhost:8100/project/update/${projectId}`,
            requestBody,
            {
              headers: `${token}`,
            }
          )
          .then((response) => {
            alert("Project Updated!!");
            navigate("/projects");
            localStorage.removeItem("projUpdateId");
          })
          .catch((err) => {
            console.log("Err", err);
          });
  };
  console.log(project);
  return (
    <div className="form-container" style={{ marginTop: "3rem" }}>
      <h1 className="form-heading">Projects</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder={project.projectTitle}
          value={input1}
          onChange={(e) =>
            setInput1(
              isAdmin() ? e.target.value : alert("Cant change this info!")
            )
          }
        />
        <input
          className="form-input"
          type="text"
          placeholder={project.projectOwner}
          value={input2}
          onChange={(e) =>
            setInput2(
              isAdmin() ? e.target.value : alert("Cant change this info!")
            )
          }
        />

        <input
          className="form-input"
          type="text"
          placeholder={project.teamMembersCount}
          value={input3}
          onChange={(e) =>
            setInput3(
              isAdmin() ? e.target.value : alert("Cant change this info!")
            )
          }
        />

        <input
          className="form-input"
          type="text"
          placeholder={project.flowchartUrl}
          value={input5}
          onChange={(e) => setInput5(e.target.value)}
        />
        <label className="form-label">Project Start Date:</label>
        <input
          className="form-input form-date"
          id="exampleDate"
          name="date"
          placeholder="date placeholder"
          type="date"
          onChange={(e) =>
            setInput4(
              isAdmin() ? e.target.value : alert("Cant change this info!")
            )
          }
        />
        <button className="form-button" type="submit">
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
