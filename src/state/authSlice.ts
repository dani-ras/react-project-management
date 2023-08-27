import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../data/users'

export interface AuthState {
    isAuthenticated: boolean,
    user: User | null
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<User>) => {
            state.user = payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            sessionStorage.removeItem('username')
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export const authReducer = authSlice.reducer