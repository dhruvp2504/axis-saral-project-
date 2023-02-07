import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import classes from "./ProjectList.module.css";
import { isAdmin } from "../../utils/CheckLogin";

const ProjectList = () => {
  const token = localStorage.getItem("jwt");
  const [projectList, setProjectList] = useState([]);

  const navigate = useNavigate();
   const addProject = (e) => {
    e.preventDefault();
    navigate("/add-project")
  }

  useEffect(() => {
    axios
      .get("http://localhost:8100/projects", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProjectList(res.data);
        console.log("Proj", projectList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  return (
    <>
      {isAdmin() ? (
        <div className={classes.addNewsBtnCont}>
          <button
            className={classes.addNewsBtn}
            onClick={(e) => {
              addProject(e);
            }}
          >
            Add
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={classes.cardContainer}>
        {projectList?.map((project) => {
          return (
            <Card
              className={classes.card}
              // key={property.propertyId}
            >
              <Card.Img
                variant="top"
                src={
                  project.flowchartUrl
                }
                className={classes.imageList}
              />
              <Card.Body>
                <Card.Title
                  className={classes.title}
                >{`Title: ${project.projectTitle}`}</Card.Title>
                <Card.Text className={classes.text}>
                  {`Project Manager: ${project.projectOwner} `}
                </Card.Text>
                <Button className={classes.explore}>
                  <Link
                    className={classes.link}
                    to={`/project/${project.projectId}`}
                  >
                    Explore{" "}
                  </Link>
                </Button>{" "}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProjectList;
