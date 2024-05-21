import React from 'react'
import {  useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()
  return (
    <div className='text-green-500 font-bold m-5'>User - {userId}</div>
  )
}
