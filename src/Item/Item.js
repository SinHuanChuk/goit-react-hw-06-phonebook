import React from "react";
import styles from "./Item.module.css";
import removeIcon from "../Images/removeIcon.png";
import { connect } from "react-redux";
import operations from "../redux/operations/operations";

const Item = ({ name, phone, id, deleteTask }) => {

  return (
    <li key={id} id={id} className={styles.listItem}>
      <p className={styles.text}>{name}</p>
      <p className={styles.text}>{phone}</p>
      <button
        className={styles.button}
        onClick={() => {
          deleteTask(id);
        }}
      >
        <img className={styles.image} src={removeIcon} />
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  deleteTask: operations.deleteTask,
};

export default connect(null, mapDispatchToProps)(Item);
