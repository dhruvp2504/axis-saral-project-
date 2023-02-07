import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { isAdmin } from "../../utils/CheckLogin";
import classes from "./ProjectDetails.module.css";

const ProjectDetails = (props) => {
  const token = localStorage.getItem("jwt");
  const params = useParams();
  const [project, setProject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8100/project/${params.projectId}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        setProject(res.data);
      });
  }, []);

  const editProj = (e) => {
    e.preventDefault();
    navigate("/update-project");
  };
  const deleteProject = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8100/project/delete/${project.projectId}`, {
        headers: `${token}`,
      })
      .then((response) => {
        alert("Project Deleted!!");
        navigate("/projects");
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  return (
    <div data-testid={props.id} className={classes.projDetails}>
      <div className={classes.imgCont}>
        <img src={project.flowchartUrl} />
      </div>
      <div className={classes.content}>
        <table className={classes.tableContainer}>
          <thead>
            <tr className={classes.tblRow}>
              <th className={classes.tblHeading} style={{ border: "none" }}>
                Project Name :
              </th>
              <td className={classes.data}> {project.projectTitle}</td>
            </tr>
            <tr className={classes.tblRow}>
              <th className={classes.tblHeading} style={{ border: "none" }}>
                Project Manager:
              </th>
              <td className={classes.data}> {project.projectOwner}</td>
            </tr>
            <tr className={classes.tblRow}>
              <th className={classes.tblHeading} style={{ border: "none" }}>
                Project Status:
              </th>
              <td className={classes.data}> {project.projectStatus}</td>
            </tr>
            <tr className={classes.tblRow}>
              <th className={classes.tblHeading} style={{ border: "none" }}>
                Project Start Date:
              </th>
              <td className={classes.data}> {project.startingDate}</td>
            </tr>
            <tr className={classes.tblRow}>
              <th className={classes.tblHeading} style={{ border: "none" }}>
                Vacany in Project:
              </th>
              <td className={classes.data}> {project.teamMembersCount}</td>
            </tr>
          </thead>
        </table>
      </div>
      {isAdmin() ? (
        <div className={classes.editBtns}>
          <div className={classes.editBtn1}>
            <button
              style={{
                width: "8rem",
                height: "3rem",
                border: "none",
                "border-radius": "15px",
                "background-color": "#97144d",
                color: "white",
              }}
              onClick={(e) => {
                editProj(e);
              }}
            >
              Edit
            </button>
          </div>
          <div className={classes.editBtn2}>
            <button
              style={{
                width: "8rem",
                height: "3rem",
                border: "none",
                "border-radius": "15px",
                "background-color": "#97144d",
                color: "white",
              }}
              onClick={(e) => deleteProject(e)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.editBtns}>
          <div className={classes.editBtn3}>
            <button
              style={{
                width: "8rem",
                height: "3rem",
                border: "none",
                "border-radius": "15px",
                "background-color": "#97144d",
                color: "white",
              }}
              onClick={(e) => {
                editProj(e);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
