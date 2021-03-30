import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/reducers'

const store = configureStore({
    reducer: {
        stateApp: appReducer
    }
})

export default store