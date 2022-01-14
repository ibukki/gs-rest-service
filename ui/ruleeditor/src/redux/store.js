import { configureStore } from "@reduxjs/toolkit";
import blockDataReducer from './blockDataSlice';
import counterReducer from './counterSlice';

export default configureStore({
    reducer:{
        blockData: blockDataReducer,
        counter: counterReducer
    }
})