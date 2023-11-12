import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title : "Kaos Oblong",
    desc : "Berbahan Tipis",
    harga : 50000
};

const kaosSlince = createSlice({
    name : 'kaos',
    initialState: {
        kaosku: [],
    },
    reducers:{
        
    }
})

export default kaosSlince.reducer