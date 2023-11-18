import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


interface initialStateType{
    title : string,
    desc : string,
    harga : number
}

const initialState : initialStateType = {
    title : "Celana Gober",
    desc : "All Size",
    harga : 70000
};

const celanaSlice = createSlice({
    name : 'celana',
    initialState: initialState,
    reducers:{

    }
})

export const title = (state: RootState) => state.celana.title;
export const desc = (state: RootState) => state.celana.desc;
export const harga = (state: RootState) => state.celana.harga;

export default celanaSlice.reducer