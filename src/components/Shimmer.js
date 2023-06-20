import React from 'react'

const Shimmer = () => {
  return (
    <div>
    <div className='res-container' >
        {Array(15).fill("").map((e) => {
          return <div className='shimmer-card'></div>
        })}
    </div>
    </div>
  )
}

export default Shimmer