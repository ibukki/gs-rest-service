import React, { useEffect, useState } from 'react'
import {ItemTypes} from './Constants'
import { useDrag } from 'react-dnd'
import { Menu,Button,Divider } from 'antd';
import  '../css/block.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlock } from '../redux/blockDataSlice';
import { addBox } from '../redux/counterSlice';

export default function Block(props) {
    const dispatch = useDispatch();

    let [cwidth,setCwidth] = useState(props.width || "160px")
    let [cheight,setCheight] = useState(props.height || "160px")
    let [cleft,setCleft] = useState(props.x);
    let [ctop,setCtop] = useState(props.y);
    let [selected, setSelected] = useState(props.selected);



    const [{isDragging}, dragRef] = useDrag(()=>({
        type:ItemTypes.BLOCK,
        item:{id: props.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    useEffect(()=>{
        console.log(cheight);
    },[]);

    let activeBlock = (evt) =>{
        dispatch(selectBlock(evt.currentTarget.id));
    }

    return (
        <div className={"blockRoot"+ (props.selected ? ' active' : '' )} id={props.id} ref={dragRef} style={{width:cwidth, height:cheight,background:'#07a', position:'absolute',left:cleft,top:ctop}} onClick={activeBlock}>
            <Button> Button </Button>
            {props.text}
            <svg style={{height:'100%',width:'100%',top:0,left:0,position:"absolute"}}> 
                <g stroke="red" strokeWidth="3" fill="red">
                    <circle id="pointTopRight" cx={parseInt(cwidth) - 2} cy="0" r="3"></circle>
                </g>
                <g stroke="red" strokeWidth="3" fill="red">
                    <circle id="pointTopLeft" cx="-2" cy="0" r="3"></circle>
                </g>
                <g stroke="red" strokeWidth="3" fill="red">
                    <circle id="pointBottomRight" cx={parseInt(cwidth) - 2} cy={parseInt(cheight) - 2} r="3"></circle>
                </g>
                <g stroke="red" strokeWidth="3" fill="red">
                    <circle id="pointBottomLeft" cx="-2" cy={parseInt(cheight) - 2} r="3"></circle>
                </g>
            </svg>
        </div>
    )
}