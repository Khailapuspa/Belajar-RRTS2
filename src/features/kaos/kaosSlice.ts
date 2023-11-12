import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface initialStateType{
    title : string,
    desc : string,
    harga : number
}

const initialState: initialStateType = {
    title : "Kaos Oblong",
    desc : "Berbahan Tipis",
    harga : 50000
};

const kaosSlince = createSlice({
    name : 'kaos',
    initialState: initialState,
    reducers:{

    }
})

export const title = (state: RootState) => state.kaos.title;
export const desc = (state: RootState) => state.kaos.desc;
export const harga = (state: RootState) => state.kaos.harga;

export default kaosSlince.reducer