import { createSlice, current } from "@reduxjs/toolkit";

export const slice = createSlice({
    name:'blockData',
    initialState:{
        blocks:[
            {id:"block_0",selected:false,x:10,y:30, text:"1"},
            {id:"block_1",selected:false,x:200,y:300, text:"2"},
            {id:"block_2",selected:true,x:300,y:50, text:"3"}
        ]
    },
    reducers:{
        addBlock: (state,action) =>{
            state.blocks.push(action.payload);
        },
        deleteBlock: state =>{
            console.log(state.blocks)
        },
        selectBlock: (state,action) =>{
            let blockId = action.payload;

            console.log(blockId);
            const selBlock = state.blocks.find(block=>block.id == blockId);
            if(selBlock){
                selBlock.selected = true;
            }
            
            const delSelBlocks = state.blocks.filter(block=>block.id !== blockId);
            if(delSelBlocks && delSelBlocks.length > 0){
                for(let idx in delSelBlocks){
                    delSelBlocks[idx].selected = false;
                }
            }
        }
    }
})

export const {addBlock, deleteBlock, selectBlock} = slice.actions;
export const selectBlocks = state => state.blockData.blocks;
export default slice.reducer;