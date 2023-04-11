import React from "react";
import styles from "./PageHeader.module.css"
import {deleteAllData} from "../../../utils/deleteAllData"

const PageHeader = () => {
  return (
    <div className={styles.pageContainer}>
      <a className={styles.innerContainer} href={"/"} onClick={deleteAllData}>
        <img className={styles.logo} src="/Rosen_logo.png" alt={"Rosen Logo"} />
      </a>
    </div>
  );
};

export default PageHeader;
