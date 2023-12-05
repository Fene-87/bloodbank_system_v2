import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
    bloodRequestsList: [],
    status: 'idle',
}

const baseUrl = "http://localhost:3001/bloodrequests";

export const fetchBloodRequests = createAsyncThunk('bloodRequests/fetchBloodRequests', async () => {
    try {
        const response = await Axios.get(baseUrl);
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        throw(error.message);
    }
});

const bloodRequestsSlice = createSlice({
    name: 'bloodRequests',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
          .addCase(fetchBloodRequests.pending, (state) => ({
            ...state,
            status: 'loading',
          }))
          .addCase(fetchBloodRequests.fulfilled, (state, { payload }) => {
            const keys = Object.keys(payload);
            const tempArray = [];
            keys.forEach((key) => {
              tempArray.push(payload[key]);
            });
            state.bloodRequestsList = [...tempArray];
            state.status = 'loaded';
          })
    }
})

export default bloodRequestsSlice.reducer;
