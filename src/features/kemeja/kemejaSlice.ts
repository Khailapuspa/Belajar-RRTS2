import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title : "Kemeja",
    desc : "ini kemeja",
    harga : 20000
};

const kemejaSlice = createSlice({
    name: 'kemeja',
    initialState,
    reducers:{

    }
})

export default kemejaSlice.reducer