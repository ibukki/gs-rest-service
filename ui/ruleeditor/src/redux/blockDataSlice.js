import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'blockData',
    initialState:{
        value:[]
    },
    reducers:{
        addBlock: (state,action) =>{
            state.value.push(action.payload);
        },
        deleteBlock: state =>{
            console.log(state.value)
        },
        selectBlock: state =>{

        }
    }
})

export const {addBlock, deleteBlock, selectBlock} = slice.actions;
export const selectBlocks = state => state.blockData.value;
export default slice.reducer;