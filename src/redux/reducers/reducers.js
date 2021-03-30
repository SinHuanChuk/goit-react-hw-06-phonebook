import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from '../actions/actions'

const addTask = createReducer([], {
    [actions.addTaskAction]: (state, {payload}) => {
        if(state.find(el => el.name === payload.name)) {
            return state
        } else {
            return [...state, {id: payload.id, name: payload.name, phone: payload.phone}]
        }
    },
    [actions.getDeleteElementAction]: (state, {payload}) => state.filter(el => el.id !== payload.id)
})

const filterName = createReducer('', {
    [actions.getFilterNameAction]: (state, {payload}) => payload.text
})

const visibleAlert = createReducer(false, {
    [actions.visibleAlertAction]: (state, {payload}) => payload.value
})

export default combineReducers({
    array: addTask,
    filterName,
    visibleAlert
})