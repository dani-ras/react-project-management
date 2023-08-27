import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './authSlice'
import { dialogReducer } from './dialogSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dialog: dialogReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: { ignoredPaths: ['dialog'], ignoredActions: ['dialog/setDialogProps'] }
        })
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch