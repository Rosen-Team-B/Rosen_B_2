import React from "react";
import logo from "./Rosen_logo.png";
// import Styles from './PageHeader.module.scss'

//Will move the styles to a separate css file in the future.
const styles = {
  pageContainer: {
    background: "#365578",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerContainer: {
    padding: "0.5rem 2rem",
  },
  logo: {
    maxHeight: "2.5rem",
  },
  // username:{
  //     color: "white",
  //     fontWeight: "bold",
  // },
};

const PageHeader = () => {
  const deleteAllData = async () => {
    const apiUrl = "http://127.0.0.1:8000/videoUpload/admin/wipe_db/"
    fetch(apiUrl, {method: 'DELETE'})
        .then(response => response.json())
        .catch( error => console.error("Error occurred while deleting objects in the database."))
  }

  return (
    <div style={styles.pageContainer}>
      <a style={styles.innerContainer} href={"/"} onClick={deleteAllData}>
        <img style={styles.logo} src="/Rosen_logo.png" alt={"Rosen Logo"} />
      </a>
    </div>
  );
};

export default PageHeader;
