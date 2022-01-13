import React, { useEffect, useState } from 'react'
import Canvas from "./Canvas";
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TopMenu from './TopMenu';
import { useDispatch, useSelector } from 'react-redux';

export default function Stage(props){

    const blocks = useSelector(state => state.blockData.blocks)
    const dispatch = useDispatch();


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

    useEffect(()=> {
    },[dispatch]);


//    let activeBlock = (evt)=>{
//        dispatch(selectBlock(evt.currentTarget.id));
//    }

    return (
        <div>
            <TopMenu></TopMenu>
            <DndProvider backend={HTML5Backend}>
            <div id="stage" className="stage" style={{position:"relative"}}>
                <Canvas> </Canvas>
                {
                    blocks && blocks.map(
                        (item, index) => (
                            <Block key={item.id} id={item.id} x={item.x} y={item.y} selected={item.selected}></Block>
                        )
                    )
                }
            </div>
            </DndProvider>
        </div>
    )
}