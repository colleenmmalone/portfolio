import { createSlice } from '@reduxjs/toolkit'

export const toggleDarkModeSlice = createSlice({
  name: 'toggleDarkMode',
  initialState: {
    toggled: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.toggled = !state.toggled;
    }
  },
})

export const { toggleDarkMode } = toggleDarkModeSlice.actions;

export default toggleDarkModeSlice.reducer