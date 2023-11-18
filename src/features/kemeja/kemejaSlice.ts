import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";

//tipe dari si state
interface initialStateType{
    title : string,
    desc : string,
    harga : number
}

//isi nya ini
const initialState: initialStateType = {
    title : "Kemeja",
    desc : "ini kemeja",
    harga : 20000
};

const kemejaSlice = createSlice({
    name: 'kemeja',
    initialState: initialState,
    reducers:{

    }
})

export const title = (state: RootState) => state.kemeja.title;
export const desc = (state: RootState) => state.kemeja.desc;
export const harga = (state: RootState) => state.kemeja.harga;

export default kemejaSlice.reducer