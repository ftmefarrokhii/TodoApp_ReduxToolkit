import { configureStore } from "@reduxjs/toolkit";
import TodoRecucer from "./todo/TodoSlice";

const store = configureStore({
    reducer :{
        todos : TodoRecucer
    }
})

export default store