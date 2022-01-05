import React, { useEffect, useState } from 'react'
import Block from "./Block";

export default function Canvas(props) {
    let [cwidth,setCwidth] = useState("1000px")
    let [cheight,setCheight] = useState("800px")

    useEffect(()=>{
        console.log("init");
        console.log(cheight);
    },[]);

    return (<div className="canvasRoot" style={{width:cwidth, height:cheight, border:'1px solid #ccc' ,background:'url(/gridbg.svg) repeat'}}>
        
            This the canvas page
            <Block></Block>
         </div>)
}