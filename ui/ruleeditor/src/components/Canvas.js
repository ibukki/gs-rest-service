import React, { useEffect, useState } from 'react'
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { getBlock,updateBlock} from '../redux/blockDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants';


export default function Canvas(props) {
    let [cwidth,setCwidth] = useState("1000px")
    let [cheight,setCheight] = useState("800px")
    let dispatch = useDispatch();

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: ItemTypes.BLOCK,
        drop: (item, monitor) => moveBlock(item,monitor),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))


    useEffect(()=>{
        console.log("init");
    },[]);

    function moveBlock(item, monitor){
        let targetOffset = monitor.getSourceClientOffset();

        let sourceItem = document.getElementById(item.id);
        let stageOffSetY = document.getElementById("stage").offsetTop;
        
        sourceItem.style.top = (targetOffset.y - stageOffSetY + window.scrollY )+"px";
        sourceItem.style.left = targetOffset.x+"px";

        dispatch(updateBlock({
            id:item.id,
            x: sourceItem.style.left,
            y: sourceItem.style.top
        }));
    }

    return (
        <div ref={dropRef} className="canvasRoot" style={{width:cwidth, height:cheight, border:'1px solid #ccc' ,background:'url(/gridbg.svg) repeat', position:'relative'}}>
            <div style={{position:'absolute',height:'100%',width:'100%'}}>
                {props.children}
                This the canvas page
            </div>
        </div>
        
    )
}