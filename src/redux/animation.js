import { createSlice } from '@reduxjs/toolkit'

const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    value: false,
  },
  reducers: {
    init: state => {
      state.value = true
    },
    reset: state => {
      state.value = false
    },
  },
})

export const { init, reset } = animationSlice.actions
export default animationSlice.reducer
