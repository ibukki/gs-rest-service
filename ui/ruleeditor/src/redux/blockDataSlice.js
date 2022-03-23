import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";

export const slice = createSlice({
    name:'blockData',
    initialState:{
        blocks:[
            {id:"block_0",selected:false,x:10,y:30, text:"1",w:"320",h:"80"},
            {id:"block_1",selected:false,x:400,y:300, text:"2",w:"160",h:"80"},
            {id:"block_2",selected:true,x:500,y:50, text:"3",w:"200", h:"60"}
        ],
        connects:[
            {from:{id:"block_0",pos:1},to:{id:"block_1",pos:1},color:"red",style:"straight"},
            {from:{id:"block_1",pos:2},to:{id:"block_2",pos:2},color:"blue",style:"straight"}
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
        },
        getBlock:(state, action) =>{
            let blockId = action.payload;
            const selBlock = state.blocks.find(block=>block.id == blockId);
            return selBlock;
        },

        updateBlock: (state,action)=>{
            let payload = action.payload;
            let blockId = payload.id;
            const selBlock = state.blocks.find(block=>block.id == blockId);
            if(selBlock){
                selBlock.x = payload.x;
                selBlock.y = payload.y;
            } 
        }
    }
})

export const {addBlock, deleteBlock, selectBlock, updateBlock,getBlock} = slice.actions;
export const selectBlocks = state => state.blockData.blocks;
export const getAllConnects = state => state.blockData.connects;
export default slice.reducer;