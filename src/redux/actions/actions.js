import { createAction } from "@reduxjs/toolkit";

const addRequest = createAction("app/Request");

const addSuccess = createAction("app/Success", (id, name, phone) => ({
  payload: {
    id,
    name,
    phone,
  },
}));

const addError = createAction("app/Error");

const fetchRequest = createAction("app/fetchRequest");

const fetchSuccess = createAction("app/fetchSuccess");

const fetchError = createAction("app/fetchError");

const deleteRequest = createAction("app/deleteRequest");

const deleteSuccess = createAction("app/deleteSuccess", (id) => ({
  payload: { id },
}));

const deleteError = createAction("app/deleteError");

const getFilterNameAction = createAction("app/getFiltredName", (text) => ({
  payload: { text },
}));

const visibleAlertAction = createAction("app/visibleAlert", (value) => ({
  payload: { value },
}));

export default {
  getFilterNameAction,
  visibleAlertAction,
  addRequest,
  addSuccess,
  addError,
  fetchRequest,
  fetchSuccess,
  fetchError,
  deleteRequest,
  deleteSuccess,
  deleteError,
};
