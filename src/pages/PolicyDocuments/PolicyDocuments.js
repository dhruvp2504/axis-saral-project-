import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "../../utils/CheckLogin";
// import GoogleDocsViewer from 'react-google-docs-viewer'
import styles from "./PolicyDocuments.module.css";

const PolicyDocuments = () => {
  const navigate = useNavigate();

  const addPolicy = (e) =>{
    e.preventDefault(e);
    navigate("/add-policy-doc")
  }
  return (
    <>
    {isAdmin()?
    <>
    <div style={{"float": "right"}}>
    <button className={styles.addDocsBtn} onClick={((e) =>{addPolicy(e)})}>Add</button>
    </div>
    </>:""}
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
    </>
  );
};

export default PolicyDocuments;
