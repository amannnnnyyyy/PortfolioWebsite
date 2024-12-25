import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const {progress} = useProgress()
  return (
    <Html
        as='div' center style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                zIndex:50
            }
        }
        >
            <span className='canvas-loader'/>
            <p style={{fontSize: 14, color: '#ffffff', fontWeight: 800, marginTop: 40, padding: '5px 10px'}}>
                {progress!=0?`${progress.toFixed(2)+' %'}`:`Loading...`}
                </p>
        </Html>
  )
}

export default CanvasLoader