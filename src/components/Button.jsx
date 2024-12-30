import React from 'react'

const Button = ({name, isBeam=false, containerClass}) => {
  return (
    <button className={`btn $${containerClass}`}>
        {isBeam &&(
            <span>
                
            </span>
        )}
        {name}
        </button>
  )
}

export default Button