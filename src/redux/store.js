import { configureStore } from "@reduxjs/toolkit";
// import reducers from "./reducers";
import userSlice from "./reducers/UserReducer";

export const store = configureStore({
    reducer:{
        user: userSlice
    }
})