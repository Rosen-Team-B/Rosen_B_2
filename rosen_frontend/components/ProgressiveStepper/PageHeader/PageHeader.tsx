import React from "react";
import styles from "./PageHeader.module.css"

const PageHeader = () => {
  const deleteAllData = async () => {
    const apiUrl = "http://127.0.0.1:8000/videoUpload/admin/wipe_db/"
    fetch(apiUrl, {method: 'DELETE'})
        .then(response => response.json())
        .catch( error => console.error("Error occurred while deleting objects in the database.", error))
  }

  return (
    <div className={styles.pageContainer}>
      <a className={styles.innerContainer} href={"/"} onClick={deleteAllData}>
        <img className={styles.logo} src="/Rosen_logo.png" alt={"Rosen Logo"} />
      </a>
    </div>
  );
};

export default PageHeader;
