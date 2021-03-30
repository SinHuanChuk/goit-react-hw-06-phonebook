import React from "react";
import List from "../List/List";
import Create from "../Create/Create";
import Search from "../Search/Search";
import Notification from "../Notification/Notification";
import animationSearch from "../Animation/AnimationSearch.module.css";
import animationNotification from "../Animation/AnimationNotification.module.css";
import styles from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

const App = ({array, visibleAlert}) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <CSSTransition
        in = {visibleAlert}
        timeout={300}
        unmountOnExit
        classNames={animationNotification}
      >
        <Notification/>
      </CSSTransition>
      <Create/>
      <CSSTransition
        in={array.length > 1}
        timeout={300}
        classNames={animationSearch}
        unmountOnExit
      >
        <Search/>
      </CSSTransition>
      <List/>
    </div>
  </div>
)

const mapStateToProps = ({stateApp}) => ({
  array: stateApp.array,
  visibleAlert: stateApp.visibleAlert
})

export default connect(mapStateToProps)(App)