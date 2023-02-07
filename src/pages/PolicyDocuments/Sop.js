import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./PolicyPages.module.css";
import GoogleDocsViewer from "react-google-docs-viewer";

const Sop = () => {
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
          return ele.documentType === "Sop";
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

export default Sop;
