import { createSlice, current } from "@reduxjs/toolkit";
import { useRef } from "react";

export const slice = createSlice({
    name:'blockData',
    initialState:{
        blocks:[
            {id:"block_0",selected:false,x:10,y:30, text:"1"},
            {id:"block_1",selected:false,x:200,y:300, text:"2"},
            {id:"block_2",selected:true,x:300,y:50, text:"3",width:"200px", height:"60px"}
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
        }
    }
})

export const {addBlock, deleteBlock, selectBlock} = slice.actions;
export const selectBlocks = state => state.blockData.blocks;
export const getAllConnects = state => state.blockData.connects;
export default slice.reducer;