import React, { useEffect, useState } from 'react'

export default function Block(props) {
    let [cwidth,setCwidth] = useState("160px")
    let [cheight,setCheight] = useState("160px")

    useEffect(()=>{
        console.log("init");
        console.log(cheight);
    },[]);

    return (<div className="blockRoot" style={{width:cwidth, height:cheight, border:'1px solid #ccc' ,background:'#07a'}}></div>)
}