import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/Auth"

const Store=configureStore({
     reducer:{
          auth:AuthSliceReducer,
          
     }
})
export default Store;