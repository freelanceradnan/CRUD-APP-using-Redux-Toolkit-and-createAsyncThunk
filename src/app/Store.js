import { configureStore } from "@reduxjs/toolkit";
import { userDetailsSlice } from "../feature/userDetails";

export const store=configureStore({
    reducer:{
        user:userDetailsSlice.reducer
    }
})