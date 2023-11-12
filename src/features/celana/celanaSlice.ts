import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : "Celana Gober",
    desc : "All Size",
    harga : 70000
};

const celanaSlice = createSlice({
    name : 'celana',
    initialState,
    reducers:{

    }
})

export default celanaSlice.reducer