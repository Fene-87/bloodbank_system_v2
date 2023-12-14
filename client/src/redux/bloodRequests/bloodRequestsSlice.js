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
        approveBloodRequest: (state, { payload }) => {
            const approvedRequest = state.bloodRequestsList.map((item) => {
                if(item.blood_request_id !== payload) {
                    return item;
                }
                return {...item, status: 'Approved'}
            })
            state.bloodRequestsList = [...approvedRequest];
        },
        rejectBloodRequest: (state, { payload }) => {
            const approvedRequest = state.bloodRequestsList.map((item) => {
                if(item.blood_request_id !== payload) {
                    return item;
                }
                return {...item, status: 'Rejected'}
            })
            state.bloodRequestsList = [...approvedRequest];
        },
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

export const { approveBloodRequest, rejectBloodRequest } = bloodRequestsSlice.actions;

export default bloodRequestsSlice.reducer;
