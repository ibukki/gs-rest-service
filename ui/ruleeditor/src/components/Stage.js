import React, { useEffect, useState } from 'react'
import Canvas from "./Canvas";
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TopMenu from './TopMenu';
import Item from 'antd/lib/list/Item';
import { useDispatch, useSelector } from 'react-redux';
import { addBlock, deleteBlock } from '../redux/blockDataSlice';

export default function Stage(props){

    const blocks = useSelector(state => state.blockData.value)
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
        initBlocks();
    },[]);

    let initBlocks = () =>{
        dispatch(addBlock({
            selected:false,
            x:10,
            y:30
        }));
        dispatch(addBlock({
            selected:false,
            x:200,
            y:300
        }));
    }

    return (
        <div>
            <TopMenu></TopMenu>
            <DndProvider backend={HTML5Backend}>
            <div id="stage" className="stage" style={{position:"relative"}}>
                <Canvas> </Canvas>
                {
                    blocks && blocks.map(
                        (item, index) => (
                            <Block id={'block_'+index} x={item.x} y={item.y}></Block>
                        )
                    )
                }
            </div>
            </DndProvider>
        </div>
    )
}