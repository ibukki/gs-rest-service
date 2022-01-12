import { configureStore } from "@reduxjs/toolkit";
import blockDataReducer from './blockDataSlice';

export default configureStore({
    reducer:{
        blockData: blockDataReducer
    }
})