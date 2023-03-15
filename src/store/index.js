import { configureStore } from '@reduxjs/toolkit'
import toggleDarkMode from './slices/toggleDarkModeSlice'

export default configureStore({
  reducer: {
    toggleDarkMode: toggleDarkMode,
  },
})