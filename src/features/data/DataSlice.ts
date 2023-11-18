import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { datapenjualanAsync } from "../../actions/BajusAll";


interface initialStateType{
    data : []
}

const initialState : initialStateType = {
    data : [],
};

const dataSlice = createSlice({
    name : 'data',
    initialState: initialState,
    reducers:{

    },
    extraReducers(builder) {
        builder.addCase(datapenjualanAsync.fulfilled, (state, action) => {
            state.data = action.payload
        })
    },
})

export const data = (state: RootState) => state.data.data;

export default dataSlice.reducer