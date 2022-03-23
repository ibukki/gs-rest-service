import React, { useEffect, useState } from 'react'
import Canvas from "./Canvas";
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import TopMenu from './TopMenu';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlocks ,getAllConnects} from '../redux/blockDataSlice';

export default function Stage(props){

    const blockData = useSelector(state => state.blockData)
    const dispatch = useDispatch();
    const connects = useSelector(getAllConnects);


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
        <Block key={item.id} id={item.id} x={item.x} y={item.y} selected={item.selected} text={item.text} w={item.w} h={item.h}></Block>
    ))

    const drawLines = ()=>{
        var arr = [];
        console.log(connects);
        if(connects && connects.length > 0){
            for(let idx in connects){
                arr.push(connect(connects[idx].from.id, connects[idx].to.id));
            }
        }
        return arr;
    }

    const connect = (from, to)=>{
        let point1 = getBlockConnectPoint(from, to);
        let point2 = getBlockConnectPoint(to,from);
        console.log("render connect line from:" + point1.x + " to: " + point2.x);
        return (
            <line x1={point1.x} y1={point1.y} x2={point2.x} y2={point2.y} style={{stroke:'rgb(255,0,0)',strokeWidth:2}}></line>
        )
    }


    const getBlockConnectPoint= (divId, targetId)=>{
        let block = blockData.blocks.find(block => block.id === divId);
        let targetBlock = blockData.blocks.find(block => block.id === targetId);
        if(!block || !targetBlock) return;
        let point = {
            x: block.x,
            y: block.y
        }
        if(block.x < targetBlock.x && block.y < targetBlock.y){
            //use bottom right
            console.log(block);
            point.x = point.x + parseInt(block.w - 2);
            point.y = point.y + parseInt(block.h - 2);
        }
        
        return point;
    }

    const queryDom = (divId) =>{
        return document.getElementById(divId);
    }

    useEffect(()=> {
        console.log("abc")
    },[dispatch]);


    return (
        <div>
            <TopMenu></TopMenu>
            <DndProvider backend={HTML5Backend}>
            <div id="stage" className="stage" style={{position:"relative"}}>
                <Canvas>
                    <svg style={{height:"100%",width:"100%"}} id="svgcontainer">
                        {drawLines()}
                    </svg>
                </Canvas>
                {renderBlocks}
            </div>
            </DndProvider>
        </div>
    )
}