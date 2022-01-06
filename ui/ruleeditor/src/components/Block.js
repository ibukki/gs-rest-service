import React, { useEffect, useState } from 'react'
import {ItemTypes} from './Constants'
import { useDrag } from 'react-dnd'

export default function Block(props) {
    let [cwidth,setCwidth] = useState("160px")
    let [cheight,setCheight] = useState("160px")
    let [cleft,setCleft] = useState(20);
    let [ctop,setCtop] = useState(25);

    const [{isDragging}, drag] = useDrag(()=>({
        type:ItemTypes.BLOCK,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(()=>{
        console.log("init");
        console.log(cheight);
    },[]);

    return (<div className="blockRoot" ref={drag} style={{width:cwidth, height:cheight, border:'1px solid #ccc' ,background:'#07a', position:'absolute',left:cleft,top:ctop}}></div>)
}