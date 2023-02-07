import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/CheckLogin";
import Comment from "./Comment";

import styles from './NewsFeed.module.css'

function NewsFeed() {
  const [newsFeedList, setNewsFeedList] = useState([]);
  const token = localStorage.getItem("jwt");
  const handleSubmit = (e) => {
    e.preventDefault();
    // setComments([...comments, newComment]);
    // setNewComment('');
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8100/newsfeeds", {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setNewsFeedList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("isAdmin", isAdmin());

  const addProject = (e) => {
    e.preventDefault();
    navigate("/add-news-feed")
  }

  return (
    <> 
    {isAdmin()?(
      <div style={{"float": "right"}}>
        <button className={styles.addNewsBtn} onClick={(e) => {
          addProject(e)
        }}>Add</button>
      </div>
    ):""}
    <div> <div className={styles.newsfeed}>
      <div className="container">

      <div
          className={styles.heading}
          style={{  textAlign: "center" }}
        >
          NEWS FEED
        </div>
         
              <div className="row">
                {newsFeedList.map((item, index) => {
                  
                  return (
                    <Comment news={item} key={index}/> 
                  );
                })}
              </div>



      </div>
    </div>
    </div>
 
    </>
  );
}

export default NewsFeed;
