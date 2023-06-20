import React from 'react'
import {useRouteError} from 'react-router-dom'
const Error = () => {
    const err = useRouteError()
  return (
    <div>This is error page{err.statusText}</div>
  )
}

export default Error