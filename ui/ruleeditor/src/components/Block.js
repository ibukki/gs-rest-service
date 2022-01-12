import React, { useEffect, useState } from 'react'
import {ItemTypes} from './Constants'
import { useDrag } from 'react-dnd'
import { Menu,Button,Divider } from 'antd';
import  '../css/block.css';

export default function Block(props) {
    let [cwidth,setCwidth] = useState("160px")
    let [cheight,setCheight] = useState("160px")
    let [cleft,setCleft] = useState(props.x);
    let [ctop,setCtop] = useState(props.y);

    const [{isDragging}, dragRef] = useDrag(()=>({
        type:ItemTypes.BLOCK,
        item:{id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(()=>{
        console.log("init");
        console.log(cheight);
    },[]);

    let activeBlock = (evt)=>{
        let srcElement = evt.currentTarget;
        srcElement.className = "blockRoot active";
    }

    let inactiveBlock = (evt)=>{
        let srcElement = evt.currentTarget;
        srcElement.className = "blockRoot";
    }

    return (
        <div className="blockRoot" id={props.id} ref={dragRef} style={{width:cwidth, height:cheight,background:'#07a', position:'absolute',left:cleft,top:ctop}} onClick={activeBlock} onLostPointerCapture={inactiveBlock}>
            <Button> Button </Button>
        </div>
    )
}