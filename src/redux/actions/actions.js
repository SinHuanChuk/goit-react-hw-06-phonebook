import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addTaskAction = createAction('app/addTaskAction', (name, phone) => ({
    payload: {
        id: uuidv4(),
        name,
        phone,
    }
}))

const getFilterNameAction = createAction('app/getFiltredName', (text) => ({payload: {text}}))
const getDeleteElementAction = createAction('app/getDeleteElement', (id) => ({payload: {id}}))
const visibleAlertAction = createAction('app/visibleAlert', (value) => ({payload: {value}}))

export default {addTaskAction, getFilterNameAction, getDeleteElementAction, visibleAlertAction}