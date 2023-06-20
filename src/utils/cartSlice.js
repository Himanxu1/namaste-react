import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
                state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items = []
        },
        removeItem:(state,action)=>{
            state.items = state.items.filter((item) => item.card.info.id !== action.payload)
        }
    }
})


export const {addItem,removeItem,clearCart} = cardSlice.actions

export default cardSlice.reducer