import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./AddNewsFeed.css";

function AddNewsFeed() {
  const [title, setTitle] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8100/newsfeed", {
        newsTitle: title,
        newsContent: input2,
        newsUploadDate: input3
      },{
        headers: {
          Authorization: `${token}`,
        }})
      .then((response) => {
        alert("Project Added!!");
        navigate("/news-feed")
      }).catch((err) =>{
        console.log("Err", err);
      });
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">News Feed</h1>
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
          placeholder="Image URL"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />

<label className="form-label">Upload Date:</label>
<input
      className="form-input form-date"
      id="exampleDate"
      name="date"
      required
      placeholder="date placeholder"
      type="date"
      onChange={(e) => setInput3(e.target.value)}
    />


        <button className="form-button" type="submit">Add News Feed</button>
      </form>
    </div>
  );
}

export default AddNewsFeed;