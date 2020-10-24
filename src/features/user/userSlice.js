import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AuthService from '../auth/authService'

export const userLogin = createAsyncThunk('user/login', async ({email, password}) => {
    const auth = new AuthService()
    const response = await auth.login(email, password)
    return response
})

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers:{},
    extraReducers:{
        [userLogin.rejected]: (state, action) => {
            console.log('rejected!')
            console.log(action)
        },
        [userLogin.fulfilled]: (state, action) => {
            console.log(action)
            state.user = action.payload.data
        }
    }
})

export default userSlice.reducer