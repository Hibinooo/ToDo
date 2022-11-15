import { createSlice } from "@reduxjs/toolkit"

const timeSlice = createSlice({
  name: "time",
  initialState: {
    times: [],
  },
  reducers: {
    addTime(state, action) {
      console.log(action.payload)
      console.log(state.times)
      if (action.payload.length > 0) {
        state.times.push(action.payload)
      }
    },
    toggleTime(state, action) {
      const toggledTime = state.times[1].find(time => time.id === action.payload.id)

      console.log(toggledTime)
      toggledTime.active = !toggledTime.active
      console.log(toggledTime.active)
    }
  }
})
export const { addTime, toggleTime } = timeSlice.actions;
export default timeSlice.reducer;