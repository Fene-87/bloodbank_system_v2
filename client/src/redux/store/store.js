import { configureStore } from "@reduxjs/toolkit";
import donationRequestsSlice from "../donationRequests/donationRequestsSlice";
import bloodRequestsSlice from "../bloodRequests/bloodRequestsSlice";

const store = configureStore({
    reducer: {
        donationRequests: donationRequestsSlice,
        bloodRequests: bloodRequestsSlice,
    }
});

export default store;
