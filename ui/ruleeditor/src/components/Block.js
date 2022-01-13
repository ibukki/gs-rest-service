import React, { useEffect, useState } from 'react'
import {ItemTypes} from './Constants'
import { useDrag } from 'react-dnd'
import { Menu,Button,Divider } from 'antd';
import  '../css/block.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectBlock } from '../redux/blockDataSlice';

export default function Block(props) {
    const dispatch = useDispatch();

    let [cwidth,setCwidth] = useState("160px")
    let [cheight,setCheight] = useState("160px")
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
        <div className={"blockRoot"+ (selected ? ' active' : '' )} id={props.id} ref={dragRef} style={{width:cwidth, height:cheight,background:'#07a', position:'absolute',left:cleft,top:ctop}} onClick={activeBlock}>
            <Button> Button </Button>
        </div>
    )
}