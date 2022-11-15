import {configureStore} from "@reduxjs/toolkit"
import timeReducer from "./timeSlice"
export default configureStore({
  reducer: {
    times: timeReducer,
  }
})