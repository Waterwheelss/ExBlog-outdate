import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Testing Title',
            date: new Date().toISOString(),
            content: 'Testing Testing Testing Testing Testing Testing Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing Testing',
            excerpt: 'Testing Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing Testing',
        },
        {
            id: 2,
            title: 'Testing Title',
            date: new Date().toISOString(),
            content: 'Testing Testing Testing Testing Testing Testing Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing Testing',
            excerpt: 'Testing Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing TestingTesting Testing Testing Testing Testing',
        }
    ],
    status: 'idle',
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export default postsSlice.reducer