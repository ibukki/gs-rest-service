import React, { useEffect, useState } from 'react'
import Canvas from "./Canvas";
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TopMenu from './TopMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlock } from '../redux/blockDataSlice';
import { decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,selectBox,addBox } from '../redux/counterSlice';

export default function Stage(props){

    const blockData = useSelector(state => state.blockData)
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

    const boxs = useSelector(selectBox);


    document.onkeydown = checkKey;
    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
            console.log("up")
        }
        else if (e.keyCode == '40') {
            // down arrow
            console.log("down")
        }
        else if (e.keyCode == '37') {
            // left arrow
            console.log("left")
        }
        else if (e.keyCode == '39') {
        // right arrow
            console.log("right");
        }
        e.preventDefault();

    }

    const renderBlocks = blockData.blocks.map((item,index)=>(
        <Block key={item.id} id={item.id} x={item.x} y={item.y} selected={item.selected} text={item.text}></Block>
    ))

    useEffect(()=> {
        console.log("abc")
    },[dispatch]);

    
    return (
        <div>
            <TopMenu></TopMenu>
            <div>
                <button onClick={()=> dispatch(increment())}>+</button>
                <span style={{marginLeft:'10px'}}>{count}</span>
                <button style={{marginLeft:'10px'}} onClick={()=> dispatch(decrement())}>-</button>
            </div>
            <div>
                {
                    boxs.map((item,idx) => (
                        <div key={"item"+idx}> {item.name} </div>
                    ))
                }
            </div>
            <DndProvider backend={HTML5Backend}>
            <div id="stage" className="stage" style={{position:"relative"}}>
                <Canvas> </Canvas>
                {renderBlocks}
            </div>
            </DndProvider>
        </div>
    )
}