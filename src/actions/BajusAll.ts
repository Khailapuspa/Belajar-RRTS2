import { createAsyncThunk } from "@reduxjs/toolkit";

export const BASE_URL = "http://[::1]:3000"


export const datapenjualanAsync = createAsyncThunk('get/bajus', async () => {
    try {
      const response = await fetch(`${BASE_URL}/bajus`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      // Assuming response.json() returns the expected data structure
      const data = await response.json();

      // The value we return becomes the `fulfilled` action payload
      return data;
    } catch (error) {
      // You can handle errors here
      console.log(error);
      
    }
  }
);
