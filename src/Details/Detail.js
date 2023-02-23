import React from 'react'
import './Detail.css'
import { Link } from 'react-router-dom'

function Detail({data}) {
  return (
    <div className='detail-container'>
        <div className='detail'>
            <h1>{data.title}</h1>
            <div>{data.date.toUTCString()}</div>
            <p>{data.detail}</p>
            <Link className='button' to='/' >Home</Link>
        </div>
    </div>
  )
}

export default Detail