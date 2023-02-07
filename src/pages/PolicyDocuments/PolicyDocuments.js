import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
// import GoogleDocsViewer from 'react-google-docs-viewer'
import styles from "./PolicyDocuments.module.css";

const PolicyDocuments = () => {
  const navigate = useNavigate();
  return (
    // <div>
    //   {policyDocuments?.map((docs) => {
    //     return(
    //         <div id={docs.documentId}>
    //             <div>{docs.documentTitle}</div>
    //             <GoogleDocsViewer width="500px" height="500px" fileUrl= {docs.documentUrl} />
    //         </div>
    //         <h1>{docs.documentType}</h1>
    //     )
    //   })}
    // </div>
    <div className={styles.policyDocsContainer}>
      <div className={styles.btnCss}>
        <button
          onClick={() => {
            navigate("/sops");
          }}
          className={styles.docsBtn}
        >
          SOPs
        </button>
      </div>
      <div className={styles.btnCss}>
        <button
          onClick={() => {
            navigate("/scds");
          }}
          className={styles.docsBtn}
        >
          SCDs
        </button>
      </div>
      <div className={styles.btnCss}>
        <button
           onClick={() => {
            navigate("/policies");
          }}
          className={styles.docsBtn}
        >
          Policy Docs
        </button>
      </div>
    </div>
  )
}

export default PolicyDocuments;