import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import animationCaption from "../Animation/AnimationCaption.module.css";
import actions from "../redux/actions/actions";
import operations from "../redux/operations/operations";
import styles from "./Create.module.css";
import selectors from '../redux/selectors/selectors'

class Create extends Component {
  state = {
    name: "",
    phone: "",
  };

  getName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  getPhone = ({ target }) => {
    this.setState({
      phone: target.value,
    });
  };

  getVisible = () => {
    const { name } = this.state;
    const { array, visibleAlert } = this.props;

    if (array.find((el) => el.name === name)) {
      visibleAlert(true);

      setTimeout(() => {
        visibleAlert(false);
      }, 1000);
    }
  };

  render() {
    const { name, phone } = this.state;
    const { addTask, array } = this.props;

    return (
      <div className={styles.wrapper}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={animationCaption}
          unmountOnExit
        >
          <h1 className={styles.caption}>Phonebook</h1>
        </CSSTransition>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.getVisible();
            if (array.find((el) => el.name === name)) {
              return;
            } else {
              addTask(name, phone);
            }
            this.setState({
              name: "",
              phone: "",
            });
          }}
          className={styles.forma}
        >
          <p className={styles.text}>Name</p>
          <input
            required
            className={styles.input}
            onChange={this.getName}
            type="text"
            placeholder="name"
            value={name}
          />
          <p className={styles.text}>Phone number</p>
          <input
            required
            className={styles.input}
            onChange={this.getPhone}
            max={9999999999}
            type="number"
            placeholder="phone"
            value={phone}
          />
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ stateApp }) => ({
  array: selectors.array(stateApp),
});

const mapDispatchToProps = {
  visibleAlert: actions.visibleAlertAction,
  addTask: operations.addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
