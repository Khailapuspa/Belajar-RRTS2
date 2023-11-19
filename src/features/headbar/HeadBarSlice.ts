import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface initialStateType {
    route: string
}

const initialState: initialStateType = {
    route: "/",
};

const headbarSlice = createSlice({
    name: 'headbar',
    initialState: initialState,
    reducers: {
        setRoute: (state, action) => {
            state.route = action.payload
        }
    },
})

export const headbar = (state: RootState) => state.headbar.route;

export const { setRoute } = headbarSlice.actions;

export default headbarSlice.reducer