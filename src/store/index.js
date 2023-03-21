import { configureStore } from '@reduxjs/toolkit'
import toggleDarkMode from './slices/toggleDarkModeSlice'
import changeTheme from './slices/changeThemeSlice'

export default configureStore({
  reducer: {
    toggleDarkMode: toggleDarkMode,
    changeTheme: changeTheme,
  },
})