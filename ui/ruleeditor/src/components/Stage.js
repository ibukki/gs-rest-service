import React, { useEffect, useState } from 'react'
import Canvas from "./Canvas";
import Block from "./Block";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function Stage(props){

    return (
        <DndProvider backend={HTML5Backend}>
            <Canvas></Canvas>
            <Block id="block1"></Block>
        </DndProvider>
    )
}