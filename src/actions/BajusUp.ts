import { createAsyncThunk } from "@reduxjs/toolkit";

export const BASE_URL = "http://[::1]:3000"

interface initialParamsType {
    id: number,
    title: string,
    desc: string,
    harga: number
}

export const updateAsync = createAsyncThunk('update/bajus', async ({ id, title, desc, harga }: initialParamsType, thunkAPI) => {
    try {
        const response = await fetch(`${BASE_URL}/bajus/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ title, desc, harga }),
            headers: { 'Content-Type': 'application/json' },
        });

        // Assuming response.json() returns the expected data structure
        const data = await response.json();

        // The value we return becomes the `fulfilled` action payload
        return data;
    } catch (error) {
        // You can handle errors here
        return thunkAPI.rejectWithValue(error);
    }
}
);
