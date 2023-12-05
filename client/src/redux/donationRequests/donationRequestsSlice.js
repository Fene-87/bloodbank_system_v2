import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
    donationRequestsList: [],
    status: 'idle',
}

const baseUrl = "http://localhost:3001/scheduled-donations";

export const fetchDonationRequests = createAsyncThunk('donationRequests/fetchDonationRequests', async () => {
    try {
        const response = await Axios.get(baseUrl);
        console.log(response, "Hello");
        return response.data;
    } catch (error) {
        throw(error.message);
    }
});

const donationRequestsSlice = createSlice({
    name: 'donationRequests',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchDonationRequests.pending, (state) => ({
            ...state,
            status: 'loading',
          }))
          .addCase(fetchDonationRequests.fulfilled, (state, { payload }) => {
            const keys = Object.keys(payload);
            const tempArray = [];
            keys.forEach((key) => {
              tempArray.push(payload[key]);
            });
            state.donationRequestsList = [...tempArray];
            state.status = 'loaded';
          })
    }
})

export default donationRequestsSlice.reducer;
