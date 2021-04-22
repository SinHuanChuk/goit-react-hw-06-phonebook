import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import animationListItem from "../Animation/AnimationListItem.module.css";
import styles from "./List.module.css";
import Item from "../Item/Item";
import { connect } from "react-redux";
import selectors from "../redux/selectors/selectors";

const List = ({ filteredArray, loading }) =>
  loading === false ? (
    <TransitionGroup component={"ul"} className={styles.list}>
      {filteredArray.length > 0 &&
        filteredArray.map((el) => (
          <CSSTransition
            timeout={250}
            key={el.id}
            classNames={animationListItem}
          >
            <Item name={el.name} phone={el.phone} id={el.id} />
          </CSSTransition>
        ))}
    </TransitionGroup>
  ) : (
    <h1>Loading....</h1>
  );

const mapStateToProps = ({ stateApp }) => ({
  filteredArray: selectors.filteredArray(stateApp),
  loading: selectors.loading(stateApp),
});

export default connect(mapStateToProps)(List);
