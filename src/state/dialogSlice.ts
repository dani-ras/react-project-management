import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DialogProps } from 'primereact/dialog'

const initialState: Omit<DialogProps, 'onHide'> = {
    visible: false,
    style: { width: '50vw', },
    dismissableMask: true,
}


export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: initialState,
    reducers: {
        _onHide: () => {
            return initialState
        },
        setDialogProps: (state, { payload }: PayloadAction<Omit<DialogProps, 'onHide'>>) => {
            return {
                ...(state as DialogProps),
                ...payload
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setDialogProps, _onHide } = dialogSlice.actions

export const dialogReducer = dialogSlice.reducer