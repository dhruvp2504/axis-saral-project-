import React, { useEffect, useState } from "react";
import classes from "./PolicyPages.module.css"
import GoogleDocsViewer from "react-google-docs-viewer";
import axios from "axios";

const Scd = () => {
  const [sop, setSop] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8400/policydocuments").then((res) => {
      setSop(res.data);
    });
  }, []);
  return (
    <div className={classes.polDocsContainer}>
      {sop
        ?.filter((ele) => {
          return ele.documentType === "Scd";
        })
        .map((ele) => {
          return (
            <>
              <div id={ele.documentId} className={classes.polDocsContainer}>
                <div className={classes.docTitle}>
                  <p>{ele.documentTitle}</p>
                </div>
                <div className={classes.googleDoc}>
                  <GoogleDocsViewer
                    width="550px"
                    height="450px"
                    fileUrl={ele.documentUrl}
                  />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Scd;
