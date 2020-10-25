import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './features/post/postsSlice'
import userReducer from './features/user/userSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  }
})