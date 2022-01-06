import React, { useEffect, useState } from 'react'
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function Canvas(props) {
    let [cwidth,setCwidth] = useState("1000px")
    let [cheight,setCheight] = useState("800px")

    useEffect(()=>{
        console.log("init");
        console.log(cheight);
    },[]);

    return (<DndProvider backend={HTML5Backend}>
            <div className="canvasRoot" style={{width:cwidth, height:cheight, border:'1px solid #ccc' ,background:'url(/gridbg.svg) repeat', position:'relative'}}>
            
                This the canvas page
                <Block></Block>
            </div>
         </DndProvider>)
}