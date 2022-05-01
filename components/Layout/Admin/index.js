import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "./Admin.module.scss";
import "semantic-ui-css/semantic.min.css";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.adminLayout}>{children}</div>
      <Sidebar />
    </>
  );
};
export default AdminLayout;
