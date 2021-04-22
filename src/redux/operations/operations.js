import actions from "../actions/actions";
import axios from "axios";

const addPost = (name, phone) => (dispatch) => {
  dispatch(actions.addRequest());

  axios
    .post("http://localhost:4000/array", { name, phone })
    .then(({ data }) => {
      return dispatch(actions.addSuccess(data.id, data.name, data.phone));
    })
    .catch((err) => dispatch(actions.addError(err)));
};

const fetchTask = () => (dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .get("http://localhost:4000/array")
    .then(({ data }) => {
      return dispatch(actions.fetchSuccess(data));
    })
    .catch((err) => dispatch(actions.fetchError(err)));
};

const deleteTask = (id) => (dispatch) => {
  dispatch(actions.deleteRequest());

  axios
    .delete(`http://localhost:4000/array/${id}`)
    .then(() => dispatch(actions.deleteSuccess(id)))
    .catch((err) => dispatch(actions.deleteError(err)));
};

export default { addPost, fetchTask, deleteTask };
