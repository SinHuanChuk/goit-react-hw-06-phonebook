import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "../actions/actions";

const addTask = createReducer([], {
  [actions.addSuccess]: (state, { payload }) => [
    ...state,
    { id: payload.id, name: payload.name, phone: payload.phone },
  ],
  [actions.fetchSuccess]: (state, { payload }) => payload,
  [actions.deleteSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload.id),
});

const filterName = createReducer("", {
  [actions.getFilterNameAction]: (state, { payload }) => payload.text,
});

const visibleAlert = createReducer(false, {
  [actions.visibleAlertAction]: (state, { payload }) => payload.value,
});

const loading = createReducer(false, {
  [actions.fetchRequest]: () => true,
  [actions.fetchSuccess]: () => false,
  [actions.fetchError]: () => false,
  [actions.addRequest]: () => true,
  [actions.addSuccess]: () => false,
  [actions.addError]: () => false,
});

export default combineReducers({
  array: addTask,
  filterName,
  loading,
  visibleAlert,
});
