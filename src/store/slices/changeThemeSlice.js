import { createSlice } from '@reduxjs/toolkit'

export const changeThemeSlice = createSlice({
  name: 'changeTheme',
  initialState: {
    theme: "lavender",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    }
  },
})

export const { changeTheme } = changeThemeSlice.actions;
export default changeThemeSlice.reducer