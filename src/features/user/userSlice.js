import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from '../auth/authService'

const auth = new AuthService()

export const userLogin = createAsyncThunk('user/login', async ({ email, password }) => {
    const response = await auth.login(email, password)
    return response
})

export const getUser = createAsyncThunk('user/authenticate', async token => {
    const response = await auth.getUser(token)
    return response
})

export const refreshToken = createAsyncThunk('user/refresh', async () => {
    const response = await auth.refresh()
    return response
})

export const selectUser = state => state.user

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        isLoaded: false,
    },
    reducers: {},
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload.data
        },
        [refreshToken.rejected]: (state, action) => {
            state.isLoaded = true
            state.isAuthenticated = false
        },
        [refreshToken.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.data.accessToken)
            const newState = {
                isAuthenticated: true,
                isLoaded: true,
                ...action.payload.data
            }

            return newState
        },
        [userLogin.fulfilled]: (state, action) => {
            localStorage.setItem("token", action.payload.data.accessToken)
            const newState = {
                isAuthenticated: true,
                isLoaded: true,
                ...action.payload.data
            }

            return newState
        }
    }
})

export default userSlice.reducer