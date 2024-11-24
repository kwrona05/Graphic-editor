/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Stage, Layer, Rect, Circle} from 'react-konva'

const Canvas: React.FC<{ stageRef: React.RefObject<any> }> = ({ stageRef }) => {
    const [shapes, setShapes] = useState<any>([])

    const addRectangle = () => {
        setShapes([...shapes, {type: 'rect', x: 50, y: 50, width: 100, height: 100, fill: 'blue'}])
    }

    const addCircle = () => {
        setShapes([...shapes, {type: 'circle', x: 150, y: 150, radius: 50, fill: 'green'}])
    }

    return(
        <div className='canva-container'>
            <button onClick={addRectangle}>Add Rectangle</button> 
            <button onClick={addCircle}>Add Circle</button>
            <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
                <Layer>
                    {shapes.map((shape: any, index: any) => {
                        if (shape.type === 'rect') {
                            return <Rect key={index} {...shape} draggable />
                        } else if (shape.type === 'circle') {
                            return <Circle key={index} {...shape} draggable />
                        }
                        return null
                    })}
                </Layer>
            </Stage>
        </div>
    )
}

export default Canvas
