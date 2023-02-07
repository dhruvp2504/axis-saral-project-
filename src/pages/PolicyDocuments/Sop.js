import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./PolicyPages.module.css"
import GoogleDocsViewer from 'react-google-docs-viewer'


const Sop = () => {
const [sop, setSop]= useState([])

useEffect(() => {
  axios.get("http://localhost:8400/policydocuments")
  .then((res) =>{
    setSop(res.data)
  })
}, [])

  return (
    <div className={classes.polDocsContainer}>
      {sop?.filter((ele) =>{
        return ele.documentType==="Sop"
      }).map((ele)=>{
        return (
          <>
          <div id={ele.documentId}>
                <div>{ele.documentTitle}</div>
                <GoogleDocsViewer width="500px" height="500px" fileUrl= {"https://docs.google.com/document/d/e/2PACX-1vQqZRaUwLx49VuVYv1LJa0fmCL6z_O4HTwGhLETDhECKQ9JoVkJWbdWNdEzWEgk9IaAgKH9_uZfdHH8/pub"} />
            </div>
            <h1>{ele.documentType}</h1>
          </>
        );
      })}
    </div>
  );
}

export default Sop;
