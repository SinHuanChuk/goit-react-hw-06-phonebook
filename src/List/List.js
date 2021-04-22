import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import animationListItem from "../Animation/AnimationListItem.module.css";
import styles from "./List.module.css";
import Item from "../Item/Item";
import { connect } from "react-redux";
import selectors from "../redux/selectors/selectors";
import Loader from "react-loader-spinner";

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
    <Loader type="Puff" color="#000" height={60} width={60} />
  );

const mapStateToProps = ({ stateApp }) => ({
  filteredArray: selectors.filteredArray(stateApp),
  loading: selectors.loading(stateApp),
});

export default connect(mapStateToProps)(List);
