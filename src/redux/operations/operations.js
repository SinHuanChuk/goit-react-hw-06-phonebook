import actions from "../actions/actions";
import axios from "axios";
axios.defaults.baseURL =
  "https://my-json-server.typicode.com/SinHuanChuk/goit-react-hw-06-phonebook/array";

const addPost = (name, phone) => (dispatch) => {
  dispatch(actions.addRequest());

  axios
    .post("/", { name, phone })
    .then(({ data }) => {
      return dispatch(actions.addSuccess(data.id, data.name, data.phone));
    })
    .catch((err) => dispatch(actions.addError(err)));
};

const fetchTask = () => (dispatch) => {
  dispatch(actions.fetchRequest());

  axios
    .get("/")
    .then(({ data }) => {
      return dispatch(actions.fetchSuccess(data));
    })
    .catch((err) => dispatch(actions.fetchError(err)));
};

const deleteTask = (id) => (dispatch) => {
  dispatch(actions.deleteRequest());

  axios
    .delete(`/${id}`)
    .then(() => dispatch(actions.deleteSuccess(id)))
    .catch((err) => dispatch(actions.deleteError(err)));
};

export default { addPost, fetchTask, deleteTask };
