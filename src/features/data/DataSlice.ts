import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { datapenjualanAsync } from "../../actions/BajusAll";
import { searchAsync } from "../../actions/BajusId";
import { deleteAsync} from "../../actions/BajusDel";
import { Action } from "@remix-run/router";
import { updateAsync } from "../../actions/BajusUp";


interface initialStateType {
    data: [],
    search: any,
    delete: any,
    update: any,
}

const initialState: initialStateType = {
    data: [],
    search: {},
    delete: {},
    update: {},
};

const dataSlice = createSlice({
    name: 'data',
    initialState: initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(datapenjualanAsync.fulfilled, (state, action) => {
            state.data = action.payload
        })
        builder.addCase(searchAsync.fulfilled, (state, action) => {
            state.search = action.payload
        })
        builder.addCase(deleteAsync.fulfilled, (state, action) => {
            state.delete = action.payload
        })
        builder.addCase(updateAsync.fulfilled, (state, action) => {
            state.update = action.payload
        })
    },
})

export const data = (state: RootState) => state.data.data;
export const search = (state: RootState) => state.data.search;
export const del = (state: RootState) => state.data.delete;
export const update = (state: RootState) => state.data.update;

export default dataSlice.reducer