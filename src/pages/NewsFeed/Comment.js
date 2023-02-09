import classes from "./NewsFeed.module.css";
import { FaComment } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAdmin } from "../../utils/CheckLogin";

const Comment = (props) => {
  let token = localStorage.getItem("jwt");
  // const [open, setOpen] = useState(false);
  const [showComments, setShowComments] = useState();
  const empEmail = localStorage.getItem("emailId");
  console.log("Local", empEmail);
  const [empList, setEmpList] = useState([]);
  var today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [comment, setComment] = useState({
    message: "",
    employeeId: "",
    newsFeedId: props.news.newsFeedId,
    commentDate: date,
  });
  const [commentList, setCommentList] = useState([]);
  let endpoints = [
    "http://localhost:8100/comments",
    "http://localhost:8100/employees",
  ];

  useEffect(() => {
    axios
      .all(
        endpoints.map((endpoint) => axios.get(endpoint), {
          headers: {
            Authorization: `${token}`,
          },
        })
      )
      .then((res) => {
        console.log(res);
        setCommentList(res[0].data);
        setEmpList(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [comment]);

  const postComment = (e) => {
    e.preventDefault();
    console.log("Comment", comment);
    const filteredEmp = empList
      ?.filter((ele) => {
        return ele.emailId === empEmail;
      })
      .map((ele) => {
        return ele;
      });
    axios
      .post(
        "http://localhost:8100/employee/comment/add",
        {
          message: comment.message,
          employeeId: filteredEmp[0].employeeId,
          newsFeedId: comment.newsFeedId,
          commentDate: comment.commentDate,
        },
        {
          headers: `${token}`,
        }
      )
      .then((response) => {
        // alert(response.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  };

  // const handleDelete = (commentId) => {
  //   axios
  //     .delete(`http://localhost:8100/comment/delete/${commentId}`, {
  //       headers: `${token}`,
  //     })
  //     .then((response) => {
  //       // alert(response.data);
  //       alert("Comment Deleted!");
  //       window.location.reload(true);
  //     })
  //     .catch((err) => {
  //       console.log("Err", err);
  //     });
  // };

  return (
    <>
      <div className={classes.newsContainer}>
        <h1 className={classes.heading2}>News Title: {props.news.newsTitle}</h1>
        <div></div>
        <img src={props.news.newsContent} width="100%" height="50%"  />
        <p className="cmtBtn" onClick={() => setShowComments(!showComments)}>
          <FaComment
          // class="btn btn-danger"
          ></FaComment>{" "}
          Comment
        </p>
        {showComments && (
          <div id="example-collapse-text">
            <div className={classes.cardBody}>
              <div className={classes.btnInside}>
                <div>
                  <textarea
                    className={classes.formControl}
                    id="textAreaExample"
                    rows="2"
                    placeholder="Enter a Comment..."
                    value={comment.message}
                    onChange={(e) =>
                      setComment({ ...comment, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <a
                  className="btn btn-outline-dark mt-3"
                  // style={{ "textDecoration": "none" }}
                  onClick={(e) => {
                    postComment(e);
                  }}
                >
                  <IoSend></IoSend> Send
                </a>
              </div>
              {commentList
                ?.filter((ele) => {
                  return ele.newsFeed.newsFeedId === props.news.newsFeedId;
                })
                .map((item1, index1) => {
                  return (
                    <div key={index1} className={classes.commentContainer}>
                      <div className="row ml-3">
                        <h5 className={classes.itemDes}>
                          {item1?.employee?.firstName}{" "}
                          {item1?.employee?.lastName}
                        </h5>
                        <p className={classes.itemName}>{item1?.message}</p>
                        <hr />
                        {/* {isAdmin() ? (
                          <button
                            className={classes.cmtDltBtn}
                            onClick={() => {
                              handleDelete(item1?.commentId);
                            }}
                          >
                            Delete
                          </button>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Comment;
