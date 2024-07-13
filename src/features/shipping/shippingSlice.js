import { createSlice } from "@reduxjs/toolkit";

const shippingSlice=createSlice({
    name:"shipping",
    initialState:{
        shipping:{}
    },
    reducers:{
        addShippingAddress:(state,action)=>{
            state.shipping=action.payload
        }
    }
})

export const { addShippingAddress } = shippingSlice.actions;

export default shippingSlice.reducer;
